const findPath = (maze) => {
  let memoize = maze;
  return traverseMaze(maze, 0, 0, memoize);
}

const traverseMaze = (maze, row, col, memo) => {
  if(oob(maze, row, col) || maze[row][col] === '1') {
    return false;
  }

  //reached the end
  if(row === maze.length - 1 && col === maze[0].lengh - 1) {
    return false;
  }

  if(memo[row][col] === 'visiting' || memo[row][col] === 'path_not_found') {
    return false;
  }

  memo[row][col] = 'visiting';
  let directions = [[row + 1, col], [row, col - 1], [row - 1, col], [row, col + 1]];

  for(let direction of directions) {
    //console.log('ffd',direction);
    if(traverseMaze(maze, direction[0], direction[1], memo)) {
      return true;
    }
  }
  memo[row][col] = 'path_not_found';
  console.log(memo);
  return false;
}

let maze = [
  ['0', '0', '0', '1', '1'],
  ['0', '1', '0', '0', '0'],
  ['0', '0', '1', '1', '0'],
  ['0', '0', '0', '1', '0']
];

const oob = (maze, row, col) => {
  return row < 0 || row >= maze.length || col < 0 || col >= maze[0].length;
}

console.log(findPath(maze));