const ratMaze = arr => {
let pastPositions = new Set();

return findPath(0, 0, pastPositions, arr);
}

const findPath = (row, col, pastPositions, maze) => {
  if(maze[row] === undefined || maze[row][col] === undefined) {
    console.log('hit', row, col);
    return false;
  }
  let pos = row + ',' + col;
  if(pastPositions.has(pos)) return false;
  pastPositions.add(pos);
  if(maze[row][col] === 1) return;
  if(row === maze.length - 1 && col === maze[0].length - 1) {
    console.log('hit true', row, col);
    return true;
  }

  findPath(row + 1, col, pastPositions, maze);
  findPath(row - 1, col, pastPositions, maze);
  findPath(row, col + 1, pastPositions, maze);
  findPath(row, col - 1, pastPositions, maze);

  return true;
}

const arrayMaze = [
  [0,1,1,1],
  [0,1,1,1],
  [0,0,1,0],
  [1,1,1,0]
]
console.log(ratMaze(arrayMaze));