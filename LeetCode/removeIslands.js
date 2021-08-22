const removeIsland = (matrix) => {
  for(let row in matrix) {
    for(let col in matrix[row]) {
      row = parseInt(row);
      col = parseInt(col);
      console.log(row, col)
      let directions = {
        "up": [row - 1, col],
        "left": [row, col - 1],
        "down": [row + 1, col],
        "right": [row, col + 1]
      }
      let isIsland = true;
      for(let direction in directions) {
        let firstPos = directions[direction][0];
        let secondPos = directions[direction][1];
        if(matrix[firstPos] === undefined || matrix[firstPos][secondPos] === undefined) {
          isIsland = false;
          break;
        }
      }
      if(isIsland) {
        matrix[row][col] = "0";
      }
    }
  }
  return matrix;
}

let matrix = [
  ["1", "0", "0", "0", "0", "0"],
  ["0", "1", "0", "1", "1", "1"],
  ["0", "0", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "1", "0"],
  ["1", "0", "1", "1", "0", "0"],
  ["1", "0", "0", "0", "0", "1"]
]

console.log(removeIsland(matrix));