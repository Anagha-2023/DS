class Graph {
  constructor() {
    this.map = new Map();
  }

  addVertex(data) {
    if (!this.map.has(data)) {
      this.map.set(data, []);
    }
  }

  insert(vertex, edge, isBiDir) {
    if (!this.map.has(vertex)) {
      this.addVertex(vertex);
    }
    if (!this.map.has(edge)) {
      this.addVertex(edge);
    }

    this.map.get(vertex).push(edge);

    if (isBiDir) {
      this.map.get(edge).push(vertex);
    }
  }

  display() {
    for (let [key, value] of this.map.entries()) {
      console.log(`${key} contains:`);
      for (let item of value) {
        console.log(item);
      }
    }
  }

  dfs(start) {
    const visited = [];

    const visit = (vertex) => {
      visited.push(vertex);
      for (let neighbor of this.map.get(vertex)) {
        if (!visited.includes(neighbor)) {
          visit(neighbor);
        }
      }
    };

    visit(start);
    return visited;
  }

  bfs(start) {
    const visited = [];
    const queue = [];

    visited.push(start);
    queue.push(start);

    while (queue.length !== 0) {
      let currentVertex = queue.shift();

      for (let neighbor of this.map.get(currentVertex)) {
        if (!visited.includes(neighbor)) {
          visited.push(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return visited;
  }
}

const graph = new Graph();

graph.insert(10, 1, true);
graph.insert(20, 10, true);
graph.insert(30, 40, true);
graph.insert(40, 20, true);
graph.insert(50, 5, true);

graph.display();

console.log('DFS', graph.dfs(20));
console.log('BFS', graph.bfs(20));
