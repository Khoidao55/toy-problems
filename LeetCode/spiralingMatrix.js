var spiralOrder = function(matrix) {
  let rowTop = 0;
  let rowBottom = matrix.length - 1;
  let colLeft = 0;
  let colRight = matrix[0].length - 1;
  let output = [];
  while(rowTop <= rowBottom && colLeft <= colRight) {
      for(let i = colLeft; i <= colRight; i++) {
          output.push(matrix[rowTop][i]);
      }

      for(let i = rowTop + 1; i <= rowBottom; i++) {
          output.push(matrix[i][colRight]);
      }

      for(let i = colRight - 1; i >= colLeft; i--) {
          if(rowTop === rowBottom) break;
          output.push(matrix[rowBottom][i]);
      }

      for(let i = rowBottom - 1; i > rowTop; i--) {
          if(colLeft === colRight) break;
          output.push(matrix[i][colLeft]);
      }

      rowTop++;
      rowBottom--;
      colLeft++;
      colRight--;
  }
  return output;
};