var exist = function(board, word) {
  let memo = new Set();
  let wordArr = word.split('');
  for(let row = 0; row < board.length; row++) {
      for(let col = 0; col < board[row].length; col++) {
        debugger;
          if(wordSearch(parseInt(row), parseInt(col), board, memo, wordArr)) return true;
      }
  }
  return false;
};

const wordSearch = (row, col, board, visited, wordArr) => {
    let possibleVisit = {};
    let position = row + ',' + col;
    if(possibleVisit.has(position)) return false;
    if(board[row] === undefined || board[row][col] === undefined || board[row][col] !== wordArr[0]) return false;
    let char = board[row][col];
    if(char === wordArr[0] && wordArr.length === 1) return true;
    possibleVisit.add(position);
  for(let i = 0; i < wordArr.length; i++) {
      let remaining = wordArr.slice(i + 1);
      let foundWord = wordSearch(row + 1, col, board, possibleVisit, remaining);
      if(foundWord) return true;
      foundWord = wordSearch(row - 1, col, board, possibleVisit, remaining);
      if(foundWord) return true;
      foundWord = wordSearch(row, col + 1, board, possibleVisit, remaining);
      if(foundWord) return true;
      foundWord = wordSearch(row, col - 1, board, possibleVisit, remaining);
      if(foundWord) {
          return true;
      } else {
          return;
      }
  }
}

console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]],
"AAB"))