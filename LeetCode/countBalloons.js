var maxNumberOfBalloons = function(text) {
  let balloonObj = {
      b: 0,
      a: 0,
      l: 0,
      o: 0,
      n: 0
  };
  for(let i = 0; i < text.length; i++) {
      let char = text[i].toLowerCase();
      if(char in balloonObj) {
          balloonObj[char]++;
      }
  }

return Math.min(
      balloonObj.b,
      balloonObj.a,
      Math.floor(balloonObj.l / 2),
      Math.floor(balloonObj.o / 2),
      balloonObj.n
  );
};
