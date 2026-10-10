import type * as Ctx from "../generated/FormulaParser.js";
import { FormulaVisitor } from "../generated/FormulaVisitor.js";
import type { Formula } from "../types";

export class FormulaConverter extends FormulaVisitor<Formula> {
  public override visitLtlFormula = (ctx: Ctx.LtlFormulaContext): Formula =>
    this.visit(ctx.ltlExpr())!;
  public override visitCtlFormula = (ctx: Ctx.CtlFormulaContext): Formula =>
    this.visit(ctx.ctlExpr())!;
  public override visitCtlStarFormula = (ctx: Ctx.CtlStarFormulaContext): Formula =>
    this.visit(ctx.stateExpr())!;

  public override visitLtlTrue = (_ctx: Ctx.LtlTrueContext): Formula => ({ kind: "true" });
  public override visitLtlFalse = (_ctx: Ctx.LtlFalseContext): Formula => ({ kind: "false" });
  public override visitLtlProp = (ctx: Ctx.LtlPropContext): Formula => ({
    kind: "atom",
    prop: ctx.PROP().getText(),
  });
  public override visitLtlParen = (ctx: Ctx.LtlParenContext): Formula => this.visit(ctx.ltlExpr())!;
  public override visitLtlNot = (ctx: Ctx.LtlNotContext): Formula => ({
    kind: "not",
    arg: this.visit(ctx.ltlExpr())!,
  });
  public override visitLtlNext = (ctx: Ctx.LtlNextContext): Formula => ({
    kind: "next",
    arg: this.visit(ctx.ltlExpr())!,
  });
  public override visitLtlEventually = (ctx: Ctx.LtlEventuallyContext): Formula => ({
    kind: "eventually",
    arg: this.visit(ctx.ltlExpr())!,
  });
  public override visitLtlGlobally = (ctx: Ctx.LtlGloballyContext): Formula => ({
    kind: "globally",
    arg: this.visit(ctx.ltlExpr())!,
  });
  public override visitLtlUntil = (ctx: Ctx.LtlUntilContext): Formula => ({
    kind: "until",
    left: this.visit(ctx.ltlExpr(0)!)!,
    right: this.visit(ctx.ltlExpr(1)!)!,
  });
  public override visitLtlAnd = (ctx: Ctx.LtlAndContext): Formula => ({
    kind: "and",
    left: this.visit(ctx.ltlExpr(0)!)!,
    right: this.visit(ctx.ltlExpr(1)!)!,
  });
  public override visitLtlOr = (ctx: Ctx.LtlOrContext): Formula => ({
    kind: "or",
    left: this.visit(ctx.ltlExpr(0)!)!,
    right: this.visit(ctx.ltlExpr(1)!)!,
  });
  public override visitLtlImplies = (ctx: Ctx.LtlImpliesContext): Formula => ({
    kind: "implies",
    left: this.visit(ctx.ltlExpr(0)!)!,
    right: this.visit(ctx.ltlExpr(1)!)!,
  });

  public override visitCtlTrue = (_ctx: Ctx.CtlTrueContext): Formula => ({ kind: "true" });
  public override visitCtlFalse = (_ctx: Ctx.CtlFalseContext): Formula => ({ kind: "false" });
  public override visitCtlProp = (ctx: Ctx.CtlPropContext): Formula => ({
    kind: "atom",
    prop: ctx.PROP().getText(),
  });
  public override visitCtlParen = (ctx: Ctx.CtlParenContext): Formula => this.visit(ctx.ctlExpr())!;
  public override visitCtlNot = (ctx: Ctx.CtlNotContext): Formula => ({
    kind: "not",
    arg: this.visit(ctx.ctlExpr())!,
  });
  public override visitCtlAx = (ctx: Ctx.CtlAxContext): Formula => ({
    kind: "forall",
    arg: { kind: "next", arg: this.visit(ctx.ctlExpr())! },
  });
  public override visitCtlEx = (ctx: Ctx.CtlExContext): Formula => ({
    kind: "exists",
    arg: { kind: "next", arg: this.visit(ctx.ctlExpr())! },
  });
  public override visitCtlAf = (ctx: Ctx.CtlAfContext): Formula => ({
    kind: "forall",
    arg: { kind: "eventually", arg: this.visit(ctx.ctlExpr())! },
  });
  public override visitCtlEf = (ctx: Ctx.CtlEfContext): Formula => ({
    kind: "exists",
    arg: { kind: "eventually", arg: this.visit(ctx.ctlExpr())! },
  });
  public override visitCtlAg = (ctx: Ctx.CtlAgContext): Formula => ({
    kind: "forall",
    arg: { kind: "globally", arg: this.visit(ctx.ctlExpr())! },
  });
  public override visitCtlEg = (ctx: Ctx.CtlEgContext): Formula => ({
    kind: "exists",
    arg: { kind: "globally", arg: this.visit(ctx.ctlExpr())! },
  });
  public override visitCtlAu = (ctx: Ctx.CtlAuContext): Formula => ({
    kind: "forall",
    arg: {
      kind: "until",
      left: this.visit(ctx.ctlExpr(0)!)!,
      right: this.visit(ctx.ctlExpr(1)!)!,
    },
  });
  public override visitCtlEu = (ctx: Ctx.CtlEuContext): Formula => ({
    kind: "exists",
    arg: {
      kind: "until",
      left: this.visit(ctx.ctlExpr(0)!)!,
      right: this.visit(ctx.ctlExpr(1)!)!,
    },
  });
  public override visitCtlAnd = (ctx: Ctx.CtlAndContext): Formula => ({
    kind: "and",
    left: this.visit(ctx.ctlExpr(0)!)!,
    right: this.visit(ctx.ctlExpr(1)!)!,
  });
  public override visitCtlOr = (ctx: Ctx.CtlOrContext): Formula => ({
    kind: "or",
    left: this.visit(ctx.ctlExpr(0)!)!,
    right: this.visit(ctx.ctlExpr(1)!)!,
  });
  public override visitCtlImplies = (ctx: Ctx.CtlImpliesContext): Formula => ({
    kind: "implies",
    left: this.visit(ctx.ctlExpr(0)!)!,
    right: this.visit(ctx.ctlExpr(1)!)!,
  });

  public override visitStateTrue = (_ctx: Ctx.StateTrueContext): Formula => ({ kind: "true" });
  public override visitStateFalse = (_ctx: Ctx.StateFalseContext): Formula => ({ kind: "false" });
  public override visitStateProp = (ctx: Ctx.StatePropContext): Formula => ({
    kind: "atom",
    prop: ctx.PROP().getText(),
  });
  public override visitStateParen = (ctx: Ctx.StateParenContext): Formula =>
    this.visit(ctx.stateExpr())!;
  public override visitStateNot = (ctx: Ctx.StateNotContext): Formula => ({
    kind: "not",
    arg: this.visit(ctx.stateExpr())!,
  });
  public override visitStateForall = (ctx: Ctx.StateForallContext): Formula => ({
    kind: "forall",
    arg: this.visit(ctx.pathExpr())!,
  });
  public override visitStateExists = (ctx: Ctx.StateExistsContext): Formula => ({
    kind: "exists",
    arg: this.visit(ctx.pathExpr())!,
  });
  public override visitStateAnd = (ctx: Ctx.StateAndContext): Formula => ({
    kind: "and",
    left: this.visit(ctx.stateExpr(0)!)!,
    right: this.visit(ctx.stateExpr(1)!)!,
  });
  public override visitStateOr = (ctx: Ctx.StateOrContext): Formula => ({
    kind: "or",
    left: this.visit(ctx.stateExpr(0)!)!,
    right: this.visit(ctx.stateExpr(1)!)!,
  });
  public override visitStateImplies = (ctx: Ctx.StateImpliesContext): Formula => ({
    kind: "implies",
    left: this.visit(ctx.stateExpr(0)!)!,
    right: this.visit(ctx.stateExpr(1)!)!,
  });

  public override visitPathState = (ctx: Ctx.PathStateContext): Formula =>
    this.visit(ctx.stateExpr())!;
  public override visitPathParen = (ctx: Ctx.PathParenContext): Formula =>
    this.visit(ctx.pathExpr())!;
  public override visitPathNot = (ctx: Ctx.PathNotContext): Formula => ({
    kind: "not",
    arg: this.visit(ctx.pathExpr())!,
  });
  public override visitPathNext = (ctx: Ctx.PathNextContext): Formula => ({
    kind: "next",
    arg: this.visit(ctx.pathExpr())!,
  });
  public override visitPathEventually = (ctx: Ctx.PathEventuallyContext): Formula => ({
    kind: "eventually",
    arg: this.visit(ctx.pathExpr())!,
  });
  public override visitPathGlobally = (ctx: Ctx.PathGloballyContext): Formula => ({
    kind: "globally",
    arg: this.visit(ctx.pathExpr())!,
  });
  public override visitPathUntil = (ctx: Ctx.PathUntilContext): Formula => ({
    kind: "until",
    left: this.visit(ctx.pathExpr(0)!)!,
    right: this.visit(ctx.pathExpr(1)!)!,
  });
  public override visitPathAnd = (ctx: Ctx.PathAndContext): Formula => ({
    kind: "and",
    left: this.visit(ctx.pathExpr(0)!)!,
    right: this.visit(ctx.pathExpr(1)!)!,
  });
  public override visitPathOr = (ctx: Ctx.PathOrContext): Formula => ({
    kind: "or",
    left: this.visit(ctx.pathExpr(0)!)!,
    right: this.visit(ctx.pathExpr(1)!)!,
  });
  public override visitPathImplies = (ctx: Ctx.PathImpliesContext): Formula => ({
    kind: "implies",
    left: this.visit(ctx.pathExpr(0)!)!,
    right: this.visit(ctx.pathExpr(1)!)!,
  });
}
