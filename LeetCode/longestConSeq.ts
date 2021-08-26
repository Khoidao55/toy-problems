function longestConsecutive(nums: number[]): number {
  let setNum = new Set(nums);
  let sequenceStreak: number = 1;
  if(setNum.size === 0) {
      return 0;
  }

  for(let num of setNum) {
      if(!setNum.has(num - 1)) {
          let currNum: number = num;
          let currStreak: number = 1;

          while(setNum.has(currNum + 1)) {
              currNum += 1;
              currStreak += 1;
          }

          sequenceStreak = Math.max(sequenceStreak, currStreak);
      }
  }
  return sequenceStreak;
}

let arr = [100,4,200,1,3,2];
console.log(longestConsecutive(arr));