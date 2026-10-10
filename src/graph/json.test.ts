import { describe, expect, it } from "vitest";
import type { Graph } from "../types";
import { graphToJson, parseGraphJson } from "./json.js";

const semaphore: Graph = {
  nodes: [
    { id: 0, label: "green", propositions: [{ name: "green", value: true }] },
    { id: 1, label: "red", propositions: [{ name: "green", value: false }] },
  ],
  edges: [
    { id: 0, from: 0, to: 1 },
    { id: 1, from: 1, to: 0 },
  ],
  initial: [0],
};

describe("graphToJson / parseGraphJson", () => {
  it("round-trips a graph, including labels", () => {
    const result = parseGraphJson(graphToJson(semaphore));
    expect(result).toEqual({ success: true, graph: semaphore });
  });

  it("rejects malformed JSON", () => {
    const result = parseGraphJson("{ not json");
    expect(result.success).toBe(false);
  });

  it("rejects JSON that doesn't match the Graph shape", () => {
    const result = parseGraphJson(JSON.stringify({ nodes: "oops", edges: [], initial: [] }));
    expect(result.success).toBe(false);
  });

  it("runs the shared semantic validation on the parsed graph", () => {
    const broken: Graph = { ...semaphore, initial: [99] };
    const result = parseGraphJson(graphToJson(broken));
    expect(result).toEqual({
      success: false,
      errors: [{ kind: "unknown-initial-state", referencedId: 99 }],
    });
  });
});
