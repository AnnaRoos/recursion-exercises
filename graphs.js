export class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}

export class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(number) {
    this.nodes.push(new GraphNode(number));
  }

  addEdge(number, connection) {
    this.edges.push(`${ number } - ${ connection }`);
  }
}


//Depth first search, have not finished the Graph class
const visited = new Set();

const depthFirstSearch = (node, visited, goal) => {
  if (node === null) {
    return false;
  }
  if (node.value === goal) {
    return true;
  }
  const neighbors = node.getNeibors();
  for (let i = 0; i < neighbors.length; i++) {
    if (visited.includes(neighbor[i])) {
      continue;
    }
    visited.add(neighbors[i]);
    let isFound = depthFirstSearch(neighbors[i], visited, goal);
    if (isFound) {
      return true;
    }
  }
  return false;
};