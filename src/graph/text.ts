import type { Edge, Graph, Node, Proposition } from "../types";
import type { GraphParseResult, GraphSyntaxError } from "./errors.js";
import { validateGraph } from "./validate.js";

const SECTION_HEADERS = ["variables", "nodes", "links", "initial"] as const;
type SectionHeader = (typeof SECTION_HEADERS)[number];

interface SectionLine {
  line: number;
  text: string;
}

export function graphToText(graph: Graph): string {
  const variableNames = graph.nodes[0]?.propositions.map((p) => p.name) ?? [];

  const lines: string[] = ["variables:", variableNames.join(", "), "", "nodes:"];
  for (const node of graph.nodes) {
    const values = variableNames.map((name) => {
      const prop = node.propositions.find((p) => p.name === name);
      return String(prop?.value ?? false);
    });
    lines.push(`${node.id} | ${values.join(", ")}`);
  }

  lines.push("", "links:");
  for (const edge of graph.edges) {
    lines.push(`${edge.from} -> ${edge.to}`);
  }

  lines.push("", "initial:", graph.initial.join(", "));

  return lines.join("\n");
}

export function parseGraphText(input: string): GraphParseResult {
  const errors: GraphSyntaxError[] = [];
  const sections = splitIntoSections(input, errors);
  if (errors.length > 0) {
    return { success: false, errors };
  }

  const variableNames = (sections.get("variables") ?? [])
    .flatMap((entry) => entry.text.split(","))
    .map((name) => name.trim())
    .filter((name) => name.length > 0);

  const nodes: Node[] = [];
  for (const entry of sections.get("nodes") ?? []) {
    const node = parseNodeLine(entry, variableNames, errors);
    if (node !== null) {
      nodes.push(node);
    }
  }

  const edges: Edge[] = [];
  for (const entry of sections.get("links") ?? []) {
    const edge = parseLinkLine(entry, edges.length, errors);
    if (edge !== null) {
      edges.push(edge);
    }
  }

  const initial: number[] = [];
  for (const entry of sections.get("initial") ?? []) {
    for (const raw of entry.text.split(/[,\s]+/).filter((v) => v.length > 0)) {
      const id = parseInteger(raw, entry.line, errors);
      if (id !== null) {
        initial.push(id);
      }
    }
  }

  if (errors.length > 0) {
    return { success: false, errors };
  }

  const graph: Graph = { nodes, edges, initial };
  const validationErrors = validateGraph(graph);
  return validationErrors.length === 0
    ? { success: true, graph }
    : { success: false, errors: validationErrors };
}

function splitIntoSections(
  input: string,
  errors: GraphSyntaxError[],
): Map<SectionHeader, SectionLine[]> {
  const sections = new Map<SectionHeader, SectionLine[]>();
  let current: SectionHeader | null = null;

  const lines = input.split(/\r\n|\r|\n/);
  lines.forEach((rawLine, index) => {
    const text = rawLine.trim();
    const line = index + 1;
    if (text.length === 0) {
      return;
    }

    const header = text.endsWith(":") ? text.slice(0, -1) : null;
    if (header !== null && isSectionHeader(header)) {
      current = header;
      if (!sections.has(current)) {
        sections.set(current, []);
      }
      return;
    }

    if (current === null) {
      errors.push({
        kind: "syntax",
        line,
        message: `expected a section header (${SECTION_HEADERS.map((h) => `${h}:`).join(", ")}), found "${text}"`,
      });
      return;
    }

    sections.get(current)!.push({ line, text });
  });

  return sections;
}

function isSectionHeader(value: string): value is SectionHeader {
  return (SECTION_HEADERS as readonly string[]).includes(value);
}

function parseNodeLine(
  entry: SectionLine,
  variableNames: string[],
  errors: GraphSyntaxError[],
): Node | null {
  const parts = entry.text.split("|");
  if (parts.length !== 2) {
    errors.push({
      kind: "syntax",
      line: entry.line,
      message: `expected "<id> | <comma-separated booleans>", found "${entry.text}"`,
    });
    return null;
  }

  const id = parseInteger(parts[0].trim(), entry.line, errors);
  const rawValues = parts[1]
    .split(",")
    .map((v) => v.trim())
    .filter((v) => v.length > 0);

  if (rawValues.length !== variableNames.length) {
    errors.push({
      kind: "syntax",
      line: entry.line,
      message: `expected ${variableNames.length} value(s), one per declared variable, found ${rawValues.length}`,
    });
    return null;
  }

  const propositions: Proposition[] = [];
  for (let i = 0; i < variableNames.length; i++) {
    const raw = rawValues[i];
    if (raw !== "true" && raw !== "false") {
      errors.push({
        kind: "syntax",
        line: entry.line,
        message: `expected "true" or "false", found "${raw}"`,
      });
      return null;
    }
    propositions.push({ name: variableNames[i], value: raw === "true" });
  }

  return id === null ? null : { id, label: `s${id}`, propositions };
}

function parseLinkLine(
  entry: SectionLine,
  edgeId: number,
  errors: GraphSyntaxError[],
): Edge | null {
  const match = /^(.+?)->(.+)$/.exec(entry.text);
  if (!match) {
    errors.push({
      kind: "syntax",
      line: entry.line,
      message: `expected "<from> -> <to>", found "${entry.text}"`,
    });
    return null;
  }

  const from = parseInteger(match[1].trim(), entry.line, errors);
  const to = parseInteger(match[2].trim(), entry.line, errors);
  return from === null || to === null ? null : { id: edgeId, from, to };
}

function parseInteger(raw: string, line: number, errors: GraphSyntaxError[]): number | null {
  if (!/^-?\d+$/.test(raw)) {
    errors.push({ kind: "syntax", line, message: `expected an integer, found "${raw}"` });
    return null;
  }
  return Number.parseInt(raw, 10);
}
