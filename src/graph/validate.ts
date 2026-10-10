import type { Graph } from "../types";
import type { GraphValidationError } from "./errors.js";

export function validateGraph(graph: Graph): GraphValidationError[] {
  const errors: GraphValidationError[] = [];

  if (graph.nodes.length === 0) {
    errors.push({ kind: "no-nodes" });
  }

  const nodeIds = new Set<number>();
  for (const node of graph.nodes) {
    if (nodeIds.has(node.id)) {
      errors.push({ kind: "duplicate-node-id", id: node.id });
    }
    nodeIds.add(node.id);

    const seenNames = new Set<string>();
    for (const prop of node.propositions) {
      if (seenNames.has(prop.name)) {
        errors.push({ kind: "duplicate-proposition-name", nodeId: node.id, name: prop.name });
      }
      seenNames.add(prop.name);
    }
  }

  const expectedNames = [...(graph.nodes[0]?.propositions.map((p) => p.name) ?? [])].sort();
  for (const node of graph.nodes) {
    const actualNames = [...node.propositions.map((p) => p.name)].sort();
    if (!sameElements(actualNames, expectedNames)) {
      errors.push({
        kind: "inconsistent-propositions",
        nodeId: node.id,
        expected: expectedNames,
        actual: actualNames,
      });
    }
  }

  const edgeIds = new Set<number>();
  const hasOutgoing = new Set<number>();
  for (const edge of graph.edges) {
    if (edgeIds.has(edge.id)) {
      errors.push({ kind: "duplicate-edge-id", id: edge.id });
    }
    edgeIds.add(edge.id);

    if (!nodeIds.has(edge.from)) {
      errors.push({ kind: "unknown-edge-endpoint", edgeId: edge.id, referencedId: edge.from });
    }
    if (!nodeIds.has(edge.to)) {
      errors.push({ kind: "unknown-edge-endpoint", edgeId: edge.id, referencedId: edge.to });
    }
    hasOutgoing.add(edge.from);
  }

  for (const node of graph.nodes) {
    if (!hasOutgoing.has(node.id)) {
      errors.push({ kind: "not-total", nodeId: node.id });
    }
  }

  if (graph.initial.length === 0) {
    errors.push({ kind: "no-initial-states" });
  }
  for (const id of graph.initial) {
    if (!nodeIds.has(id)) {
      errors.push({ kind: "unknown-initial-state", referencedId: id });
    }
  }

  return errors;
}

function sameElements(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((value, i) => value === b[i]);
}
