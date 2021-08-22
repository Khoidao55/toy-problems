const addition = (a, b) => {
  return a + b;
}

const subtraction = (a, b) => {
  return a - b;
}

const postExp = (expression) => {
  let expressions = {
    "+": addition,
    "-": subtraction
  }
  let stack = [];
  for(let element of expression) {
    if(!(element in expressions)) {
      stack.push(element);
    } else {
      let secondElement = stack.pop();
      let firstElement = stack.pop();
      let expressed = expressions[element](parseInt(firstElement), parseInt(secondElement));
      stack.push(expressed);
    }
  }
  return stack.pop();
}


console.log(postExp("15+2-"));