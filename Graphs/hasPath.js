// https://structy.net/problems/has-path

//BFS
const hasPath = (graph, src, dst) => {
  // todo
  let queue = [ src ];

  while(queue.length > 0) {
    let currentNode = queue.shift();
    if(currentNode === dst) {
      return true;
    }
    for(let neighbor of graph[currentNode]) {
      queue.push(neighbor);
    }
  }
  return false;
};




















