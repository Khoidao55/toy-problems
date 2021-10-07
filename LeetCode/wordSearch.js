/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
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
  let position = row + ',' + col;
  if(visited.has(position)) return false;
  visited.add(position);
  if(board[row] === undefined || board[col] === undefined || board[row][col] !== wordArr[0]) return false;
  let char = board[row][col];
  if(char === wordArr[0] && wordArr.length === 1) return true;
  for(let i = 0; i < wordArr.length; i++) {
      let remaining = wordArr.slice(i + 1);
      let foundWord = wordSearch(row + 1, col, board, visited, remaining);
      if(foundWord) return true;
      foundWord = wordSearch(row - 1, col, board, visited, remaining);
      if(foundWord) return true;
      foundWord = wordSearch(row, col + 1, board, visited, remaining);
      if(foundWord) return true;
      foundWord = wordSearch(row, col - 1, board, visited, remaining);
      if(foundWord) return true;
  }
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],
"SEE"))