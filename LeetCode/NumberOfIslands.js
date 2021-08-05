const findIsland = (grid) => {
    let countIsland = 0;

    for (let rowIdx in grid) {
        for (let colIdx in grid[rowIdx]) {
            if (grid[rowIdx][colIdx] === '1') {
                debugger;
                countIsland++;
                flood(parseInt(rowIdx), parseInt(colIdx), grid);
            }
        }
    }
    return countIsland;
}

const flood = (rowIndex, colIndex, grid) => {
    if (grid[rowIndex] === undefined || grid[rowIndex][colIndex] === undefined || grid[rowIndex][colIndex] === '0') {
        return;
    }
    grid[rowIndex][colIndex] = '0';
    flood(rowIndex, colIndex + 1, grid);
    flood(rowIndex, colIndex - 1, grid);
    flood(rowIndex + 1, colIndex, grid);
    flood(rowIndex - 1, colIndex, grid);
}

const islandGrid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '1', '1']
]
console.log(findIsland(islandGrid));