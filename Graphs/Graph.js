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

graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");
graph.addVertex("Hong Kong");
graph.addVertex("Los Angeles");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Tokyo", "Hong Kong");
graph.addEdge("Hong Kong", "Dallas");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Dallas", "Los Angeles");
graph.addEdge("Hong Kong", "Los Angeles");
console.log(graph);
graph.removeVertex("Hong Kong");
console.log('-----', graph);
