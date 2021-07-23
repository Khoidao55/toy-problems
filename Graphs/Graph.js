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
    if(!(this.adjacencyList[vertexTwo].includes(vertexOne))) this.adjacencyList[vertexTwo].push(vertexOne);
  }
}


const graph = new Graph();

graph.addVertex("New York");
graph.addVertex("San Francisco");
graph.addVertex("Minnesota");
graph.addEdge("New York", "San Francisco");
console.log(graph);