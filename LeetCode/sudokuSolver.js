const sudokuSolver = (board) => {
  for(let row in board) {
    recurseSudoku(row, 0, board);
  }
  return board;
}

const recurseSudoku = (row, col, board) => {
  if(col === 9) {
    return board;
  }

  //validate both row, column, and square;

  if(board[row][col] === '.') {
    for(let i = 1; i <= 9; i++) {
      board[row][col] = i;
      recurseSudoku(row, col + 1, board);
    }
  } else {
    recurseSudoku(row, col + 1, board);
  }
}

const columnValidity = () => {

}

const rowValidity = () => {

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