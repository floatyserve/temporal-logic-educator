import {
  type ATNSimulator,
  BaseErrorListener,
  CharStream,
  CommonTokenStream,
  type Recognizer,
  type Token,
} from "antlr4ng";
import { FormulaLexer } from "../generated/FormulaLexer.js";
import { FormulaParser } from "../generated/FormulaParser.js";
import type { Formula } from "../types";
import { FormulaConverter } from "./convert.js";

interface FormulaSyntaxError {
  line: number;
  column: number;
  message: string;
}

type FormulaParseResult =
  { success: true; formula: Formula } | { success: false; errors: FormulaSyntaxError[] };

class CollectingErrorListener extends BaseErrorListener {
  public readonly errors: FormulaSyntaxError[] = [];

  public override syntaxError<S extends Token, T extends ATNSimulator>(
    _recognizer: Recognizer<T>,
    _offendingSymbol: S | null,
    line: number,
    column: number,
    message: string,
  ): void {
    this.errors.push({ line, column, message });
  }
}

function parse(
  input: string,
  entry: (parser: FormulaParser) => { accept: (v: FormulaConverter) => Formula | null },
): FormulaParseResult {
  const listener = new CollectingErrorListener();

  const lexer = new FormulaLexer(CharStream.fromString(input));
  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);

  const parser = new FormulaParser(new CommonTokenStream(lexer));
  parser.removeErrorListeners();
  parser.addErrorListener(listener);

  const tree = entry(parser);
  if (listener.errors.length > 0) {
    return { success: false, errors: listener.errors };
  }

  return { success: true, formula: tree.accept(new FormulaConverter())! };
}

export function parseLtl(input: string): FormulaParseResult {
  return parse(input, (p) => p.ltlFormula());
}

export function parseCtl(input: string): FormulaParseResult {
  return parse(input, (p) => p.ctlFormula());
}

export function parseCtlStar(input: string): FormulaParseResult {
  return parse(input, (p) => p.ctlStarFormula());
}
