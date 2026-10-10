import type { Graph } from "../types";

export interface GraphSyntaxError {
  kind: "syntax";
  line?: number;
  message: string;
}

export type GraphValidationError =
  | { kind: "no-nodes" }
  | { kind: "duplicate-node-id"; id: number }
  | { kind: "duplicate-edge-id"; id: number }
  | { kind: "unknown-edge-endpoint"; edgeId: number; referencedId: number }
  | { kind: "unknown-initial-state"; referencedId: number }
  | { kind: "no-initial-states" }
  | { kind: "duplicate-proposition-name"; nodeId: number; name: string }
  | { kind: "inconsistent-propositions"; nodeId: number; expected: string[]; actual: string[] }
  | { kind: "not-total"; nodeId: number };

export type GraphIssue = GraphSyntaxError | GraphValidationError;

export type GraphParseResult =
  { success: true; graph: Graph } | { success: false; errors: GraphIssue[] };

export function describeGraphIssue(issue: GraphIssue): string {
  switch (issue.kind) {
    case "syntax":
      return issue.line !== undefined ? `line ${issue.line}: ${issue.message}` : issue.message;
    case "no-nodes":
      return "the model has no states";
    case "duplicate-node-id":
      return `node id ${issue.id} is used by more than one node`;
    case "duplicate-edge-id":
      return `edge id ${issue.id} is used by more than one edge`;
    case "unknown-edge-endpoint":
      return `edge ${issue.edgeId} references node ${issue.referencedId}, which does not exist`;
    case "unknown-initial-state":
      return `initial state ${issue.referencedId} does not exist`;
    case "no-initial-states":
      return "the model has no initial states";
    case "duplicate-proposition-name":
      return `node ${issue.nodeId} declares proposition "${issue.name}" more than once`;
    case "inconsistent-propositions":
      return `node ${issue.nodeId} has propositions [${issue.actual.join(", ")}], expected [${issue.expected.join(", ")}]`;
    case "not-total":
      return `node ${issue.nodeId} has no outgoing transition, which violates the Kripke model's totality requirement`;
  }
}
