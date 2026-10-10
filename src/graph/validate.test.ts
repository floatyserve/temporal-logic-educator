import { describe, expect, it } from "vitest";
import type { Graph } from "../types";
import { validateGraph } from "./validate.js";

const semaphore: Graph = {
  nodes: [
    { id: 0, label: "s0", propositions: [{ name: "green", value: true }] },
    { id: 1, label: "s1", propositions: [{ name: "green", value: false }] },
  ],
  edges: [
    { id: 0, from: 0, to: 1 },
    { id: 1, from: 1, to: 0 },
  ],
  initial: [0],
};

describe("validateGraph", () => {
  it("accepts a well-formed total model", () => {
    expect(validateGraph(semaphore)).toEqual([]);
  });

  it("flags an empty model", () => {
    expect(validateGraph({ nodes: [], edges: [], initial: [] })).toEqual([
      { kind: "no-nodes" },
      { kind: "no-initial-states" },
    ]);
  });

  it("flags a node with no outgoing transition", () => {
    const graph: Graph = {
      ...semaphore,
      edges: [{ id: 0, from: 0, to: 1 }],
    };
    expect(validateGraph(graph)).toEqual([{ kind: "not-total", nodeId: 1 }]);
  });

  it("flags an edge referencing an unknown node", () => {
    const graph: Graph = {
      ...semaphore,
      edges: [...semaphore.edges, { id: 2, from: 1, to: 99 }],
    };
    expect(validateGraph(graph)).toContainEqual({
      kind: "unknown-edge-endpoint",
      edgeId: 2,
      referencedId: 99,
    });
  });

  it("flags an initial state referencing an unknown node", () => {
    const graph: Graph = { ...semaphore, initial: [99] };
    expect(validateGraph(graph)).toContainEqual({
      kind: "unknown-initial-state",
      referencedId: 99,
    });
  });

  it("flags nodes with inconsistent proposition sets", () => {
    const graph: Graph = {
      ...semaphore,
      nodes: [
        semaphore.nodes[0],
        { id: 1, label: "s1", propositions: [{ name: "yellow", value: true }] },
      ],
    };
    expect(validateGraph(graph)).toContainEqual({
      kind: "inconsistent-propositions",
      nodeId: 1,
      expected: ["green"],
      actual: ["yellow"],
    });
  });

  it("flags a duplicate proposition name on one node", () => {
    const graph: Graph = {
      ...semaphore,
      nodes: [
        {
          id: 0,
          label: "s0",
          propositions: [
            { name: "green", value: true },
            { name: "green", value: false },
          ],
        },
        semaphore.nodes[1],
      ],
    };
    expect(validateGraph(graph)).toContainEqual({
      kind: "duplicate-proposition-name",
      nodeId: 0,
      name: "green",
    });
  });
});
