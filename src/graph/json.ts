import type { Edge, Graph, Node, Proposition } from "../types";
import type { GraphParseResult } from "./errors.js";
import { validateGraph } from "./validate.js";

export function graphToJson(graph: Graph): string {
  return JSON.stringify(graph, null, 2);
}

export function parseGraphJson(input: string): GraphParseResult {
  let data: unknown;
  try {
    data = JSON.parse(input);
  } catch (error) {
    return { success: false, errors: [{ kind: "syntax", message: (error as Error).message }] };
  }

  const graph = toGraph(data);
  if (graph === null) {
    return {
      success: false,
      errors: [{ kind: "syntax", message: "input does not match the Graph shape" }],
    };
  }

  const errors = validateGraph(graph);
  return errors.length === 0 ? { success: true, graph } : { success: false, errors };
}

function toGraph(data: unknown): Graph | null {
  if (typeof data !== "object" || data === null) {
    return null;
  }
  const { nodes, edges, initial } = data as Record<string, unknown>;
  if (!Array.isArray(nodes) || !Array.isArray(edges) || !Array.isArray(initial)) {
    return null;
  }
  if (!initial.every((id) => typeof id === "number")) {
    return null;
  }

  const parsedNodes = nodes.map(toNode);
  const parsedEdges = edges.map(toEdge);
  if (parsedNodes.some((node) => node === null) || parsedEdges.some((edge) => edge === null)) {
    return null;
  }

  return {
    nodes: parsedNodes as Node[],
    edges: parsedEdges as Edge[],
    initial: initial as number[],
  };
}

function toNode(data: unknown): Node | null {
  if (typeof data !== "object" || data === null) {
    return null;
  }
  const { id, label, propositions } = data as Record<string, unknown>;
  if (typeof id !== "number" || typeof label !== "string" || !Array.isArray(propositions)) {
    return null;
  }

  const parsedProps = propositions.map(toProposition);
  if (parsedProps.some((prop) => prop === null)) {
    return null;
  }

  return { id, label, propositions: parsedProps as Proposition[] };
}

function toProposition(data: unknown): Proposition | null {
  if (typeof data !== "object" || data === null) {
    return null;
  }
  const { name, value } = data as Record<string, unknown>;
  if (typeof name !== "string" || typeof value !== "boolean") {
    return null;
  }
  return { name, value };
}

function toEdge(data: unknown): Edge | null {
  if (typeof data !== "object" || data === null) {
    return null;
  }
  const { id, from, to } = data as Record<string, unknown>;
  if (typeof id !== "number" || typeof from !== "number" || typeof to !== "number") {
    return null;
  }
  return { id, from, to };
}
