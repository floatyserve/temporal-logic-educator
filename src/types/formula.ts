export interface AtomFormula {
  kind: "atom";
  prop: string;
}

export interface FalseFormula {
  kind: "false";
}

export interface TrueFormula {
  kind: "true";
}

export interface NotFormula {
  kind: "not";
  arg: Formula;
}

export interface AndFormula {
  kind: "and";
  left: Formula;
  right: Formula;
}

export interface OrFormula {
  kind: "or";
  left: Formula;
  right: Formula;
}

export interface ImpliesFormula {
  kind: "implies";
  left: Formula;
  right: Formula;
}

export interface NextFormula {
  kind: "next";
  arg: Formula;
}

export interface EventuallyFormula {
  kind: "eventually";
  arg: Formula;
}

export interface GloballyFormula {
  kind: "globally";
  arg: Formula;
}

export interface UntilFormula {
  kind: "until";
  left: Formula;
  right: Formula;
}

export interface ExistsFormula {
  kind: "exists";
  arg: Formula;
}

export interface ForallFormula {
  kind: "forall";
  arg: Formula;
}

export type Formula =
  | AtomFormula
  | FalseFormula
  | TrueFormula
  | NotFormula
  | AndFormula
  | OrFormula
  | ImpliesFormula
  | NextFormula
  | EventuallyFormula
  | GloballyFormula
  | UntilFormula
  | ExistsFormula
  | ForallFormula;
