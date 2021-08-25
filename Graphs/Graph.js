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
console.log(graph);