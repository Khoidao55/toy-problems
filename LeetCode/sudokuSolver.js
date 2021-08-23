const sudokuSolver = (board) => {
  for(let row in board) {
    recurseSudoku(row, 0, board, 0);
  }
  return board;
}

const recurseSudoku = (row, col, board, num) => {
  debugger;
  if(col === 9) {
    return board;
  }
  //validate both row, column, and square;

  if(col > 0 && (!columnValidity(board, row, col - 1, num) || !rowValidity(board, row, col - 1, num))){
    return;
  }

  if(board[row][col] === '.') {
    for(let i = 1; i <= 9; i++) {
      i = i.toString();
      board[row][col] = i;
      // if(!columnValidity(board, row, col, i) || !rowValidity(board, row, col, i)){
      //   //recurseSudoku(row, col + 1, board);
      //   board[row][col] = '.';
      // } else {
        recurseSudoku(row, col + 1, board, i);
      //}
    }
    return;
  } else {
    recurseSudoku(row, col + 1, board);
  }
}

const columnValidity = (board, row, col, num) => {
  let numSet = new Set();
  let colLength = 0;
  for(let i = 0; i < board.length; i++) {
    if(board[i][col] !== '.') {
      //console.log(board[i][col], num);
      //return false;
      numSet.add(board[i][col]);
      colLength++;
    }
  }
  //return true;
  return numSet.size !== colLength ? false : true;
}

const rowValidity = (board, row, col, num) => {
  let numSet = new Set();
  let rowLength = 0;
  for(let i = 0; i < board[row].length; i++) {
    if(board[row][i] !== '.') {
      //return false;
      numSet.add(board[row][i]);
      rowLength++;
    }
  }
  //return true;
  return numSet.size !== rowLength ? false : true;
}

const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".","9","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

console.log(sudokuSolver(board));