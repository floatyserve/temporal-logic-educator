import { describe, expect, it } from "vitest";
import type { Graph } from "../types";
import { graphToText, parseGraphText } from "./text.js";

const semaphoreText = `
variables:
green

nodes:
0 | true
1 | false

links:
0 -> 1
1 -> 0

initial:
0
`;

describe("parseGraphText", () => {
  it("parses a well-formed model", () => {
    expect(parseGraphText(semaphoreText)).toEqual({
      success: true,
      graph: {
        nodes: [
          { id: 0, label: "s0", propositions: [{ name: "green", value: true }] },
          { id: 1, label: "s1", propositions: [{ name: "green", value: false }] },
        ],
        edges: [
          { id: 0, from: 0, to: 1 },
          { id: 1, from: 1, to: 0 },
        ],
        initial: [0],
      },
    });
  });

  it("accepts sections in any order", () => {
    const reordered = `
links:
0 -> 1
1 -> 0

initial:
0

variables:
green

nodes:
0 | true
1 | false
`;
    expect(parseGraphText(reordered)).toEqual(parseGraphText(semaphoreText));
  });

  it("reports the line of a malformed node row", () => {
    const input = `
variables:
green

nodes:
0 | true, true

links:
0 -> 0

initial:
0
`;
    const result = parseGraphText(input);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors[0]).toMatchObject({ kind: "syntax", line: 6 });
    }
  });

  it("reports content found before any section header", () => {
    const result = parseGraphText("0 -> 1\nvariables:\n");
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.errors[0]).toMatchObject({ kind: "syntax", line: 1 });
    }
  });

  it("still runs semantic validation, e.g. catching a non-total model", () => {
    const input = `
variables:
p

nodes:
0 | true
1 | false

links:
0 -> 1

initial:
0
`;
    expect(parseGraphText(input)).toEqual({
      success: false,
      errors: [{ kind: "not-total", nodeId: 1 }],
    });
  });
});

describe("graphToText", () => {
  it("serializes a graph into the custom format, dropping labels and edge ids", () => {
    const graph: Graph = {
      nodes: [
        { id: 0, label: "critical", propositions: [{ name: "p", value: true }] },
        { id: 1, label: "idle", propositions: [{ name: "p", value: false }] },
      ],
      edges: [
        { id: 7, from: 0, to: 1 },
        { id: 8, from: 1, to: 0 },
      ],
      initial: [0],
    };

    const reparsed = parseGraphText(graphToText(graph));
    expect(reparsed).toEqual({
      success: true,
      graph: {
        nodes: [
          { id: 0, label: "s0", propositions: [{ name: "p", value: true }] },
          { id: 1, label: "s1", propositions: [{ name: "p", value: false }] },
        ],
        edges: [
          { id: 0, from: 0, to: 1 },
          { id: 1, from: 1, to: 0 },
        ],
        initial: [0],
      },
    });
  });
});
