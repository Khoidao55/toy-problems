const minimumIsland = (grid) => {
  // todo
  let smallestIsland = Infinity;
  let visited = new Set();

  for(let row in grid) {
    for(let col in grid[row]) {
      const possibleSize = explore(grid, parseInt(row), parseInt(col), visited);
      if(possibleSize > 0 && smallestIsland > possibleSize) {
        smallestIsland = possibleSize;
      }
    }
  }
  return smallestIsland;
};

const explore = (grid, row, col, visited) => {
  const pos = row + ',' + col;
  if(visited.has(pos)) return 0;
  visited.add(pos);

  if(grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === 'W') {
    return 0;
  }
  let size = 1;
  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row, col - 1, visited);
  size += explore(grid, row, col + 1, visited);

  return size;
}


























module.exports = {
  minimumIsland
};