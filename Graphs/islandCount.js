const islandCount = (grid) => {
  // todo
  const visited = new Set();
  let islandCount = 0;
  for (let row in grid) {
    for (let col in grid[row]) {
      if (DFS(grid, parseInt(row), parseInt(col), visited)) {
        islandCount++;
      }
    }
  }
  return islandCount;
};

const DFS = (grid, row, col, visited) => {
  if (
    grid[row] === undefined ||
    grid[row][col] === undefined ||
    grid[row][col] === "W"
  )
    return false;
  if (visited.has(`${row},${col}`)) return false;
  visited.add(`${row},${col}`);
  DFS(grid, row - 1, col, visited);
  DFS(grid, row + 1, col, visited);
  DFS(grid, row, col - 1, visited);
  DFS(grid, row, col + 1, visited);

  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(islandCount(grid)); // -> 3

module.exports = {
  islandCount,
};
