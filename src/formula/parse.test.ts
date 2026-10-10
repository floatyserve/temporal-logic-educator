import { describe, expect, it } from "vitest";
import { parseCtl, parseCtlStar, parseLtl } from "./parse.js";

describe("parseLtl", () => {
  it("parses an atom", () => {
    expect(parseLtl("p")).toEqual({ success: true, formula: { kind: "atom", prop: "p" } });
  });

  it("parses verum and absurdum", () => {
    expect(parseLtl("⊤")).toEqual({ success: true, formula: { kind: "true" } });
    expect(parseLtl("⊥")).toEqual({ success: true, formula: { kind: "false" } });
  });

  it("parses a greek-letter atom", () => {
    expect(parseLtl("α")).toEqual({ success: true, formula: { kind: "atom", prop: "α" } });
  });

  it("parses the propositional connectives", () => {
    expect(parseLtl("¬p")).toEqual({
      success: true,
      formula: { kind: "not", arg: { kind: "atom", prop: "p" } },
    });
    expect(parseLtl("p∧q")).toEqual({
      success: true,
      formula: {
        kind: "and",
        left: { kind: "atom", prop: "p" },
        right: { kind: "atom", prop: "q" },
      },
    });
  });

  it("parses the temporal operators", () => {
    expect(parseLtl("Xp")).toEqual({
      success: true,
      formula: { kind: "next", arg: { kind: "atom", prop: "p" } },
    });
    expect(parseLtl("pUq")).toEqual({
      success: true,
      formula: {
        kind: "until",
        left: { kind: "atom", prop: "p" },
        right: { kind: "atom", prop: "q" },
      },
    });
  });

  it("binds a prefix operator tighter than and", () => {
    expect(parseLtl("Fp∧q")).toEqual({
      success: true,
      formula: {
        kind: "and",
        left: { kind: "eventually", arg: { kind: "atom", prop: "p" } },
        right: { kind: "atom", prop: "q" },
      },
    });
  });

  it("rejects a quantifier, since LTL has none", () => {
    const result = parseLtl("AGp");
    expect(result.success).toBe(false);
  });
});

describe("parseCtl", () => {
  it("parses a fused quantifier/operator pair", () => {
    expect(parseCtl("AGp")).toEqual({
      success: true,
      formula: {
        kind: "forall",
        arg: { kind: "globally", arg: { kind: "atom", prop: "p" } },
      },
    });
  });

  it("parses the parenthesised until forms", () => {
    expect(parseCtl("E(p U q)")).toEqual({
      success: true,
      formula: {
        kind: "exists",
        arg: {
          kind: "until",
          left: { kind: "atom", prop: "p" },
          right: { kind: "atom", prop: "q" },
        },
      },
    });
  });

  it("rejects a bare temporal operator with no quantifier", () => {
    const result = parseCtl("Fp");
    expect(result.success).toBe(false);
  });

  it("rejects a quantifier wrapping a boolean combination, since that needs CTL*", () => {
    const result = parseCtl("E(Xp∧Gq)");
    expect(result.success).toBe(false);
  });

  it("rejects a quantifier used alone with no attached operator", () => {
    const result = parseCtl("A(p)");
    expect(result.success).toBe(false);
  });
});

describe("parseCtlStar", () => {
  it("parses a quantifier wrapping a boolean combination of path formulas", () => {
    expect(parseCtlStar("E(Xp∧Gq)")).toEqual({
      success: true,
      formula: {
        kind: "exists",
        arg: {
          kind: "and",
          left: { kind: "next", arg: { kind: "atom", prop: "p" } },
          right: { kind: "globally", arg: { kind: "atom", prop: "q" } },
        },
      },
    });
  });

  it("still parses a plain CTL formula, since CTL is a subset of CTL*", () => {
    expect(parseCtlStar("AGp")).toEqual({
      success: true,
      formula: {
        kind: "forall",
        arg: { kind: "globally", arg: { kind: "atom", prop: "p" } },
      },
    });
  });

  it("accepts a quantifier wrapping a parenthesised state formula, unlike strict CTL", () => {
    expect(parseCtlStar("A(p)")).toEqual({
      success: true,
      formula: { kind: "forall", arg: { kind: "atom", prop: "p" } },
    });
  });
});
