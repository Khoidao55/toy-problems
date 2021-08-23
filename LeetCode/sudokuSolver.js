const sudokuSolver = (board) => {
  for(let row in board) {
    recurseSudoku(row, 0, board);
  }
  return board;
}

const recurseSudoku = (row, col, board) => {
  debugger;
  if(col === 9) {
    return board;
  }

  //validate both row, column, and square;

  if(board[row][col] === '.') {
    for(let i = 1; i <= 9; i++) {
      i = i.toString();
      if(columnValidity(board, row, col, i) && rowValidity(board, row, col, i)){
        board[row][col] = i;
        recurseSudoku(row, col + 1, board);
      } else { // should fix
        return;
      }
    }
  } else {
    recurseSudoku(row, col + 1, board);
  }
}

const columnValidity = (board, row, col, num) => {
  for(let i = 0; i < board.length; i++) {
    if(board[i][col] === num) {
      return false;
    }
  }
  return true;
}

const rowValidity = (board, row, col, num) => {
  for(let i = 0; i < board[row].length; i++) {
    if(board[row][i] === num) {
      return false;
    }
  }
  return true;
}

const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

console.log(sudokuSolver(board));