//Undirected Graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertexOne, vertexTwo) {
    if(!(this.adjacencyList[vertexOne].includes(vertexTwo))) this.adjacencyList[vertexOne].push(vertexTwo);
    // if(!(this.adjacencyList[vertexTwo].includes(vertexOne))) this.adjacencyList[vertexTwo].push(vertexOne);
  }

  removeEdge(vertexOne, vertexTwo) {
    if(this.adjacencyList[vertexOne].includes(vertexTwo)) {
      this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(vertex => vertex !== vertexTwo);
      this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(vertex => vertex !== vertexOne);
    }
  }

  removeVertex(vertex) {
    let edges = this.adjacencyList[vertex];
    for(let vertexConnected of edges) {
      this.removeEdge(vertexConnected, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfsVisit(vertex) {
    let visitedArray = [];

    let recurseDFS = (node) => {
      visitedArray.push(node);
      this.adjacencyList[node].visited = true;
      for(let neighbor of this.adjacencyList[node]) {
        if(!this.adjacencyList[neighbor].visited) {
          recurseDFS(neighbor);
        }
      }
    }
    recurseDFS(vertex);
    return visitedArray;
  }

  contains(target) {
    let contained = false;
    let visistedNodes = new Set();
    let recurseDFS = (node) => {
      if(target === node) contained = true;
      if(visistedNodes.has(node)) return false;
      visistedNodes.add(node);
      for(let neighbor of this.adjacencyList[node]) {
        if(recurseDFS(neighbor)) {
          contained = true;
        }
      }
      return false;
    }
    recurseDFS(1);
    return contained;
  }

  bfs(node) {
    let graphQueue = [];
    let bfsData = [];
    graphQueue.push(node);
    while(graphQueue.length) {
      let currentNode = graphQueue.shift();
      bfsData.push(currentNode);
      for(let neighbors of this.adjacencyList[currentNode]) {
        if(!this.adjacencyList[neighbors].visited) {
          this.adjacencyList[neighbors].visited = true;
          graphQueue.push(neighbors);
        }
      }
    }
    return bfsData;
  }
}


const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 6);
graph.addEdge(5, 6);
//console.log(graph.dfsVisit(1));
console.log(graph.contains(7));
// console.log(graph.bfs(1));
console.log(graph);