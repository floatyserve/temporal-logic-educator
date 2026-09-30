export interface Proposition {
  name: string;
  value: boolean;
}

export interface Node {
  id: number;
  label: string;
  propositions: Proposition[];
}

export interface Edge {
  id: number;
  from: Node["id"];
  to: Node["id"];
}

export interface Graph {
  nodes: Node[];
  edges: Edge[];
  initial: Node["id"][];
}
