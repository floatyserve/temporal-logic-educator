// Generated from grammar/Formula.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { FormulaVisitor } from "./FormulaVisitor.js";

// eslint-disable-next-line no-unused-vars
type int = number;


export class FormulaParser extends antlr.Parser {
    public static readonly NOT = 1;
    public static readonly AND = 2;
    public static readonly OR = 3;
    public static readonly IMPLIES = 4;
    public static readonly TRUE = 5;
    public static readonly FALSE = 6;
    public static readonly NEXT = 7;
    public static readonly EVENTUALLY = 8;
    public static readonly GLOBALLY = 9;
    public static readonly UNTIL = 10;
    public static readonly FORALL = 11;
    public static readonly EXISTS = 12;
    public static readonly LPAREN = 13;
    public static readonly RPAREN = 14;
    public static readonly PROP = 15;
    public static readonly WS = 16;
    public static readonly RULE_ltlFormula = 0;
    public static readonly RULE_ctlFormula = 1;
    public static readonly RULE_ctlStarFormula = 2;
    public static readonly RULE_ltlExpr = 3;
    public static readonly RULE_ctlExpr = 4;
    public static readonly RULE_stateExpr = 5;
    public static readonly RULE_pathExpr = 6;

    public static readonly literalNames = [
        null, "'\\u00AC'", "'\\u2227'", "'\\u2228'", "'\\u21D2'", "'\\u22A4'", 
        "'\\u22A5'", "'X'", "'F'", "'G'", "'U'", "'A'", "'E'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, "NOT", "AND", "OR", "IMPLIES", "TRUE", "FALSE", "NEXT", "EVENTUALLY", 
        "GLOBALLY", "UNTIL", "FORALL", "EXISTS", "LPAREN", "RPAREN", "PROP", 
        "WS"
    ];
    public static readonly ruleNames = [
        "ltlFormula", "ctlFormula", "ctlStarFormula", "ltlExpr", "ctlExpr", 
        "stateExpr", "pathExpr",
    ];

    public get grammarFileName(): string { return "Formula.g4"; }
    public get literalNames(): (string | null)[] { return FormulaParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return FormulaParser.symbolicNames; }
    public get ruleNames(): string[] { return FormulaParser.ruleNames; }
    public get serializedATN(): number[] { return FormulaParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, FormulaParser._ATN, FormulaParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public ltlFormula(): LtlFormulaContext {
        let localContext = new LtlFormulaContext(this.context, this.state);
        this.enterRule(localContext, 0, FormulaParser.RULE_ltlFormula);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 14;
            this.ltlExpr(0);
            this.state = 15;
            this.match(FormulaParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ctlFormula(): CtlFormulaContext {
        let localContext = new CtlFormulaContext(this.context, this.state);
        this.enterRule(localContext, 2, FormulaParser.RULE_ctlFormula);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 17;
            this.ctlExpr(0);
            this.state = 18;
            this.match(FormulaParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ctlStarFormula(): CtlStarFormulaContext {
        let localContext = new CtlStarFormulaContext(this.context, this.state);
        this.enterRule(localContext, 4, FormulaParser.RULE_ctlStarFormula);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 20;
            this.stateExpr(0);
            this.state = 21;
            this.match(FormulaParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public ltlExpr(): LtlExprContext;
    public ltlExpr(_p: number): LtlExprContext;
    public ltlExpr(_p?: number): LtlExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new LtlExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 6;
        this.enterRecursionRule(localContext, 6, FormulaParser.RULE_ltlExpr, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 39;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FormulaParser.NOT:
                {
                localContext = new LtlNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 24;
                this.match(FormulaParser.NOT);
                this.state = 25;
                this.ltlExpr(12);
                }
                break;
            case FormulaParser.NEXT:
                {
                localContext = new LtlNextContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 26;
                this.match(FormulaParser.NEXT);
                this.state = 27;
                this.ltlExpr(11);
                }
                break;
            case FormulaParser.EVENTUALLY:
                {
                localContext = new LtlEventuallyContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 28;
                this.match(FormulaParser.EVENTUALLY);
                this.state = 29;
                this.ltlExpr(10);
                }
                break;
            case FormulaParser.GLOBALLY:
                {
                localContext = new LtlGloballyContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 30;
                this.match(FormulaParser.GLOBALLY);
                this.state = 31;
                this.ltlExpr(9);
                }
                break;
            case FormulaParser.TRUE:
                {
                localContext = new LtlTrueContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 32;
                this.match(FormulaParser.TRUE);
                }
                break;
            case FormulaParser.FALSE:
                {
                localContext = new LtlFalseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 33;
                this.match(FormulaParser.FALSE);
                }
                break;
            case FormulaParser.PROP:
                {
                localContext = new LtlPropContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 34;
                this.match(FormulaParser.PROP);
                }
                break;
            case FormulaParser.LPAREN:
                {
                localContext = new LtlParenContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 35;
                this.match(FormulaParser.LPAREN);
                this.state = 36;
                this.ltlExpr(0);
                this.state = 37;
                this.match(FormulaParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 55;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 53;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
                    case 1:
                        {
                        localContext = new LtlUntilContext(new LtlExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_ltlExpr);
                        this.state = 41;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 42;
                        this.match(FormulaParser.UNTIL);
                        this.state = 43;
                        this.ltlExpr(9);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LtlAndContext(new LtlExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_ltlExpr);
                        this.state = 44;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 45;
                        this.match(FormulaParser.AND);
                        this.state = 46;
                        this.ltlExpr(8);
                        }
                        break;
                    case 3:
                        {
                        localContext = new LtlOrContext(new LtlExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_ltlExpr);
                        this.state = 47;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 48;
                        this.match(FormulaParser.OR);
                        this.state = 49;
                        this.ltlExpr(7);
                        }
                        break;
                    case 4:
                        {
                        localContext = new LtlImpliesContext(new LtlExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_ltlExpr);
                        this.state = 50;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 51;
                        this.match(FormulaParser.IMPLIES);
                        this.state = 52;
                        this.ltlExpr(5);
                        }
                        break;
                    }
                    }
                }
                this.state = 57;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public ctlExpr(): CtlExprContext;
    public ctlExpr(_p: number): CtlExprContext;
    public ctlExpr(_p?: number): CtlExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new CtlExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 8;
        this.enterRecursionRule(localContext, 8, FormulaParser.RULE_ctlExpr, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 100;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                {
                localContext = new CtlNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 59;
                this.match(FormulaParser.NOT);
                this.state = 60;
                this.ctlExpr(16);
                }
                break;
            case 2:
                {
                localContext = new CtlAxContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 61;
                this.match(FormulaParser.FORALL);
                this.state = 62;
                this.match(FormulaParser.NEXT);
                this.state = 63;
                this.ctlExpr(15);
                }
                break;
            case 3:
                {
                localContext = new CtlExContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 64;
                this.match(FormulaParser.EXISTS);
                this.state = 65;
                this.match(FormulaParser.NEXT);
                this.state = 66;
                this.ctlExpr(14);
                }
                break;
            case 4:
                {
                localContext = new CtlAfContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 67;
                this.match(FormulaParser.FORALL);
                this.state = 68;
                this.match(FormulaParser.EVENTUALLY);
                this.state = 69;
                this.ctlExpr(13);
                }
                break;
            case 5:
                {
                localContext = new CtlEfContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 70;
                this.match(FormulaParser.EXISTS);
                this.state = 71;
                this.match(FormulaParser.EVENTUALLY);
                this.state = 72;
                this.ctlExpr(12);
                }
                break;
            case 6:
                {
                localContext = new CtlAgContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 73;
                this.match(FormulaParser.FORALL);
                this.state = 74;
                this.match(FormulaParser.GLOBALLY);
                this.state = 75;
                this.ctlExpr(11);
                }
                break;
            case 7:
                {
                localContext = new CtlEgContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 76;
                this.match(FormulaParser.EXISTS);
                this.state = 77;
                this.match(FormulaParser.GLOBALLY);
                this.state = 78;
                this.ctlExpr(10);
                }
                break;
            case 8:
                {
                localContext = new CtlAuContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 79;
                this.match(FormulaParser.FORALL);
                this.state = 80;
                this.match(FormulaParser.LPAREN);
                this.state = 81;
                this.ctlExpr(0);
                this.state = 82;
                this.match(FormulaParser.UNTIL);
                this.state = 83;
                this.ctlExpr(0);
                this.state = 84;
                this.match(FormulaParser.RPAREN);
                }
                break;
            case 9:
                {
                localContext = new CtlEuContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 86;
                this.match(FormulaParser.EXISTS);
                this.state = 87;
                this.match(FormulaParser.LPAREN);
                this.state = 88;
                this.ctlExpr(0);
                this.state = 89;
                this.match(FormulaParser.UNTIL);
                this.state = 90;
                this.ctlExpr(0);
                this.state = 91;
                this.match(FormulaParser.RPAREN);
                }
                break;
            case 10:
                {
                localContext = new CtlTrueContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 93;
                this.match(FormulaParser.TRUE);
                }
                break;
            case 11:
                {
                localContext = new CtlFalseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 94;
                this.match(FormulaParser.FALSE);
                }
                break;
            case 12:
                {
                localContext = new CtlPropContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 95;
                this.match(FormulaParser.PROP);
                }
                break;
            case 13:
                {
                localContext = new CtlParenContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 96;
                this.match(FormulaParser.LPAREN);
                this.state = 97;
                this.ctlExpr(0);
                this.state = 98;
                this.match(FormulaParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 113;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 111;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
                    case 1:
                        {
                        localContext = new CtlAndContext(new CtlExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_ctlExpr);
                        this.state = 102;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 103;
                        this.match(FormulaParser.AND);
                        this.state = 104;
                        this.ctlExpr(8);
                        }
                        break;
                    case 2:
                        {
                        localContext = new CtlOrContext(new CtlExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_ctlExpr);
                        this.state = 105;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 106;
                        this.match(FormulaParser.OR);
                        this.state = 107;
                        this.ctlExpr(7);
                        }
                        break;
                    case 3:
                        {
                        localContext = new CtlImpliesContext(new CtlExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_ctlExpr);
                        this.state = 108;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 109;
                        this.match(FormulaParser.IMPLIES);
                        this.state = 110;
                        this.ctlExpr(5);
                        }
                        break;
                    }
                    }
                }
                this.state = 115;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public stateExpr(): StateExprContext;
    public stateExpr(_p: number): StateExprContext;
    public stateExpr(_p?: number): StateExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new StateExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 10;
        this.enterRecursionRule(localContext, 10, FormulaParser.RULE_stateExpr, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 130;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case FormulaParser.NOT:
                {
                localContext = new StateNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 117;
                this.match(FormulaParser.NOT);
                this.state = 118;
                this.stateExpr(10);
                }
                break;
            case FormulaParser.FORALL:
                {
                localContext = new StateForallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 119;
                this.match(FormulaParser.FORALL);
                this.state = 120;
                this.pathExpr(0);
                }
                break;
            case FormulaParser.EXISTS:
                {
                localContext = new StateExistsContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 121;
                this.match(FormulaParser.EXISTS);
                this.state = 122;
                this.pathExpr(0);
                }
                break;
            case FormulaParser.TRUE:
                {
                localContext = new StateTrueContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 123;
                this.match(FormulaParser.TRUE);
                }
                break;
            case FormulaParser.FALSE:
                {
                localContext = new StateFalseContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 124;
                this.match(FormulaParser.FALSE);
                }
                break;
            case FormulaParser.PROP:
                {
                localContext = new StatePropContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 125;
                this.match(FormulaParser.PROP);
                }
                break;
            case FormulaParser.LPAREN:
                {
                localContext = new StateParenContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 126;
                this.match(FormulaParser.LPAREN);
                this.state = 127;
                this.stateExpr(0);
                this.state = 128;
                this.match(FormulaParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 143;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 141;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
                    case 1:
                        {
                        localContext = new StateAndContext(new StateExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_stateExpr);
                        this.state = 132;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 133;
                        this.match(FormulaParser.AND);
                        this.state = 134;
                        this.stateExpr(8);
                        }
                        break;
                    case 2:
                        {
                        localContext = new StateOrContext(new StateExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_stateExpr);
                        this.state = 135;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 136;
                        this.match(FormulaParser.OR);
                        this.state = 137;
                        this.stateExpr(7);
                        }
                        break;
                    case 3:
                        {
                        localContext = new StateImpliesContext(new StateExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_stateExpr);
                        this.state = 138;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 139;
                        this.match(FormulaParser.IMPLIES);
                        this.state = 140;
                        this.stateExpr(5);
                        }
                        break;
                    }
                    }
                }
                this.state = 145;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public pathExpr(): PathExprContext;
    public pathExpr(_p: number): PathExprContext;
    public pathExpr(_p?: number): PathExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PathExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 12;
        this.enterRecursionRule(localContext, 12, FormulaParser.RULE_pathExpr, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 160;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context) ) {
            case 1:
                {
                localContext = new PathNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 147;
                this.match(FormulaParser.NOT);
                this.state = 148;
                this.pathExpr(10);
                }
                break;
            case 2:
                {
                localContext = new PathNextContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 149;
                this.match(FormulaParser.NEXT);
                this.state = 150;
                this.pathExpr(9);
                }
                break;
            case 3:
                {
                localContext = new PathEventuallyContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 151;
                this.match(FormulaParser.EVENTUALLY);
                this.state = 152;
                this.pathExpr(8);
                }
                break;
            case 4:
                {
                localContext = new PathGloballyContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 153;
                this.match(FormulaParser.GLOBALLY);
                this.state = 154;
                this.pathExpr(7);
                }
                break;
            case 5:
                {
                localContext = new PathStateContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 155;
                this.stateExpr(0);
                }
                break;
            case 6:
                {
                localContext = new PathParenContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 156;
                this.match(FormulaParser.LPAREN);
                this.state = 157;
                this.pathExpr(0);
                this.state = 158;
                this.match(FormulaParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 176;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 174;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
                    case 1:
                        {
                        localContext = new PathUntilContext(new PathExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_pathExpr);
                        this.state = 162;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 163;
                        this.match(FormulaParser.UNTIL);
                        this.state = 164;
                        this.pathExpr(7);
                        }
                        break;
                    case 2:
                        {
                        localContext = new PathAndContext(new PathExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_pathExpr);
                        this.state = 165;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 166;
                        this.match(FormulaParser.AND);
                        this.state = 167;
                        this.pathExpr(6);
                        }
                        break;
                    case 3:
                        {
                        localContext = new PathOrContext(new PathExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_pathExpr);
                        this.state = 168;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 169;
                        this.match(FormulaParser.OR);
                        this.state = 170;
                        this.pathExpr(5);
                        }
                        break;
                    case 4:
                        {
                        localContext = new PathImpliesContext(new PathExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, FormulaParser.RULE_pathExpr);
                        this.state = 171;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 172;
                        this.match(FormulaParser.IMPLIES);
                        this.state = 173;
                        this.pathExpr(3);
                        }
                        break;
                    }
                    }
                }
                this.state = 178;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 3:
            return this.ltlExpr_sempred(localContext as LtlExprContext, predIndex);
        case 4:
            return this.ctlExpr_sempred(localContext as CtlExprContext, predIndex);
        case 5:
            return this.stateExpr_sempred(localContext as StateExprContext, predIndex);
        case 6:
            return this.pathExpr_sempred(localContext as PathExprContext, predIndex);
        }
        return true;
    }
    private ltlExpr_sempred(localContext: LtlExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 8);
        case 1:
            return this.precpred(this.context, 7);
        case 2:
            return this.precpred(this.context, 6);
        case 3:
            return this.precpred(this.context, 5);
        }
        return true;
    }
    private ctlExpr_sempred(localContext: CtlExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 4:
            return this.precpred(this.context, 7);
        case 5:
            return this.precpred(this.context, 6);
        case 6:
            return this.precpred(this.context, 5);
        }
        return true;
    }
    private stateExpr_sempred(localContext: StateExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 7:
            return this.precpred(this.context, 7);
        case 8:
            return this.precpred(this.context, 6);
        case 9:
            return this.precpred(this.context, 5);
        }
        return true;
    }
    private pathExpr_sempred(localContext: PathExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 10:
            return this.precpred(this.context, 6);
        case 11:
            return this.precpred(this.context, 5);
        case 12:
            return this.precpred(this.context, 4);
        case 13:
            return this.precpred(this.context, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,16,180,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,40,8,3,1,3,1,3,1,3,1,3,
        1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,54,8,3,10,3,12,3,57,9,3,1,4,
        1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
        1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
        1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,101,8,4,1,4,1,4,1,4,1,4,
        1,4,1,4,1,4,1,4,1,4,5,4,112,8,4,10,4,12,4,115,9,4,1,5,1,5,1,5,1,
        5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,131,8,5,1,5,1,5,1,
        5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,142,8,5,10,5,12,5,145,9,5,1,6,1,6,
        1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,161,8,6,1,6,
        1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,175,8,6,10,6,12,
        6,178,9,6,1,6,0,4,6,8,10,12,7,0,2,4,6,8,10,12,0,0,216,0,14,1,0,0,
        0,2,17,1,0,0,0,4,20,1,0,0,0,6,39,1,0,0,0,8,100,1,0,0,0,10,130,1,
        0,0,0,12,160,1,0,0,0,14,15,3,6,3,0,15,16,5,0,0,1,16,1,1,0,0,0,17,
        18,3,8,4,0,18,19,5,0,0,1,19,3,1,0,0,0,20,21,3,10,5,0,21,22,5,0,0,
        1,22,5,1,0,0,0,23,24,6,3,-1,0,24,25,5,1,0,0,25,40,3,6,3,12,26,27,
        5,7,0,0,27,40,3,6,3,11,28,29,5,8,0,0,29,40,3,6,3,10,30,31,5,9,0,
        0,31,40,3,6,3,9,32,40,5,5,0,0,33,40,5,6,0,0,34,40,5,15,0,0,35,36,
        5,13,0,0,36,37,3,6,3,0,37,38,5,14,0,0,38,40,1,0,0,0,39,23,1,0,0,
        0,39,26,1,0,0,0,39,28,1,0,0,0,39,30,1,0,0,0,39,32,1,0,0,0,39,33,
        1,0,0,0,39,34,1,0,0,0,39,35,1,0,0,0,40,55,1,0,0,0,41,42,10,8,0,0,
        42,43,5,10,0,0,43,54,3,6,3,9,44,45,10,7,0,0,45,46,5,2,0,0,46,54,
        3,6,3,8,47,48,10,6,0,0,48,49,5,3,0,0,49,54,3,6,3,7,50,51,10,5,0,
        0,51,52,5,4,0,0,52,54,3,6,3,5,53,41,1,0,0,0,53,44,1,0,0,0,53,47,
        1,0,0,0,53,50,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,
        56,7,1,0,0,0,57,55,1,0,0,0,58,59,6,4,-1,0,59,60,5,1,0,0,60,101,3,
        8,4,16,61,62,5,11,0,0,62,63,5,7,0,0,63,101,3,8,4,15,64,65,5,12,0,
        0,65,66,5,7,0,0,66,101,3,8,4,14,67,68,5,11,0,0,68,69,5,8,0,0,69,
        101,3,8,4,13,70,71,5,12,0,0,71,72,5,8,0,0,72,101,3,8,4,12,73,74,
        5,11,0,0,74,75,5,9,0,0,75,101,3,8,4,11,76,77,5,12,0,0,77,78,5,9,
        0,0,78,101,3,8,4,10,79,80,5,11,0,0,80,81,5,13,0,0,81,82,3,8,4,0,
        82,83,5,10,0,0,83,84,3,8,4,0,84,85,5,14,0,0,85,101,1,0,0,0,86,87,
        5,12,0,0,87,88,5,13,0,0,88,89,3,8,4,0,89,90,5,10,0,0,90,91,3,8,4,
        0,91,92,5,14,0,0,92,101,1,0,0,0,93,101,5,5,0,0,94,101,5,6,0,0,95,
        101,5,15,0,0,96,97,5,13,0,0,97,98,3,8,4,0,98,99,5,14,0,0,99,101,
        1,0,0,0,100,58,1,0,0,0,100,61,1,0,0,0,100,64,1,0,0,0,100,67,1,0,
        0,0,100,70,1,0,0,0,100,73,1,0,0,0,100,76,1,0,0,0,100,79,1,0,0,0,
        100,86,1,0,0,0,100,93,1,0,0,0,100,94,1,0,0,0,100,95,1,0,0,0,100,
        96,1,0,0,0,101,113,1,0,0,0,102,103,10,7,0,0,103,104,5,2,0,0,104,
        112,3,8,4,8,105,106,10,6,0,0,106,107,5,3,0,0,107,112,3,8,4,7,108,
        109,10,5,0,0,109,110,5,4,0,0,110,112,3,8,4,5,111,102,1,0,0,0,111,
        105,1,0,0,0,111,108,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,
        114,1,0,0,0,114,9,1,0,0,0,115,113,1,0,0,0,116,117,6,5,-1,0,117,118,
        5,1,0,0,118,131,3,10,5,10,119,120,5,11,0,0,120,131,3,12,6,0,121,
        122,5,12,0,0,122,131,3,12,6,0,123,131,5,5,0,0,124,131,5,6,0,0,125,
        131,5,15,0,0,126,127,5,13,0,0,127,128,3,10,5,0,128,129,5,14,0,0,
        129,131,1,0,0,0,130,116,1,0,0,0,130,119,1,0,0,0,130,121,1,0,0,0,
        130,123,1,0,0,0,130,124,1,0,0,0,130,125,1,0,0,0,130,126,1,0,0,0,
        131,143,1,0,0,0,132,133,10,7,0,0,133,134,5,2,0,0,134,142,3,10,5,
        8,135,136,10,6,0,0,136,137,5,3,0,0,137,142,3,10,5,7,138,139,10,5,
        0,0,139,140,5,4,0,0,140,142,3,10,5,5,141,132,1,0,0,0,141,135,1,0,
        0,0,141,138,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,
        0,0,144,11,1,0,0,0,145,143,1,0,0,0,146,147,6,6,-1,0,147,148,5,1,
        0,0,148,161,3,12,6,10,149,150,5,7,0,0,150,161,3,12,6,9,151,152,5,
        8,0,0,152,161,3,12,6,8,153,154,5,9,0,0,154,161,3,12,6,7,155,161,
        3,10,5,0,156,157,5,13,0,0,157,158,3,12,6,0,158,159,5,14,0,0,159,
        161,1,0,0,0,160,146,1,0,0,0,160,149,1,0,0,0,160,151,1,0,0,0,160,
        153,1,0,0,0,160,155,1,0,0,0,160,156,1,0,0,0,161,176,1,0,0,0,162,
        163,10,6,0,0,163,164,5,10,0,0,164,175,3,12,6,7,165,166,10,5,0,0,
        166,167,5,2,0,0,167,175,3,12,6,6,168,169,10,4,0,0,169,170,5,3,0,
        0,170,175,3,12,6,5,171,172,10,3,0,0,172,173,5,4,0,0,173,175,3,12,
        6,3,174,162,1,0,0,0,174,165,1,0,0,0,174,168,1,0,0,0,174,171,1,0,
        0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,13,1,0,0,
        0,178,176,1,0,0,0,12,39,53,55,100,111,113,130,141,143,160,174,176
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!FormulaParser.__ATN) {
            FormulaParser.__ATN = new antlr.ATNDeserializer().deserialize(FormulaParser._serializedATN);
        }

        return FormulaParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(FormulaParser.literalNames, FormulaParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return FormulaParser.vocabulary;
    }

    private static readonly decisionsToDFA = FormulaParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class LtlFormulaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ltlExpr(): LtlExprContext {
        return this.getRuleContext(0, LtlExprContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_ltlFormula;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlFormula) {
            return visitor.visitLtlFormula(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CtlFormulaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ctlExpr(): CtlExprContext {
        return this.getRuleContext(0, CtlExprContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_ctlFormula;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlFormula) {
            return visitor.visitCtlFormula(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CtlStarFormulaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stateExpr(): StateExprContext {
        return this.getRuleContext(0, StateExprContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_ctlStarFormula;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlStarFormula) {
            return visitor.visitCtlStarFormula(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LtlExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_ltlExpr;
    }
    public override copyFrom(ctx: LtlExprContext): void {
        super.copyFrom(ctx);
    }
}
export class LtlFalseContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FALSE(): antlr.TerminalNode {
        return this.getToken(FormulaParser.FALSE, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlFalse) {
            return visitor.visitLtlFalse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtlImpliesContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ltlExpr(): LtlExprContext[];
    public ltlExpr(i: number): LtlExprContext | null;
    public ltlExpr(i?: number): LtlExprContext[] | LtlExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LtlExprContext);
        }

        return this.getRuleContext(i, LtlExprContext);
    }
    public IMPLIES(): antlr.TerminalNode {
        return this.getToken(FormulaParser.IMPLIES, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlImplies) {
            return visitor.visitLtlImplies(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtlOrContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ltlExpr(): LtlExprContext[];
    public ltlExpr(i: number): LtlExprContext | null;
    public ltlExpr(i?: number): LtlExprContext[] | LtlExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LtlExprContext);
        }

        return this.getRuleContext(i, LtlExprContext);
    }
    public OR(): antlr.TerminalNode {
        return this.getToken(FormulaParser.OR, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlOr) {
            return visitor.visitLtlOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtlUntilContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ltlExpr(): LtlExprContext[];
    public ltlExpr(i: number): LtlExprContext | null;
    public ltlExpr(i?: number): LtlExprContext[] | LtlExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LtlExprContext);
        }

        return this.getRuleContext(i, LtlExprContext);
    }
    public UNTIL(): antlr.TerminalNode {
        return this.getToken(FormulaParser.UNTIL, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlUntil) {
            return visitor.visitLtlUntil(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtlPropContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PROP(): antlr.TerminalNode {
        return this.getToken(FormulaParser.PROP, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlProp) {
            return visitor.visitLtlProp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtlNextContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NEXT(): antlr.TerminalNode {
        return this.getToken(FormulaParser.NEXT, 0)!;
    }
    public ltlExpr(): LtlExprContext {
        return this.getRuleContext(0, LtlExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlNext) {
            return visitor.visitLtlNext(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtlAndContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ltlExpr(): LtlExprContext[];
    public ltlExpr(i: number): LtlExprContext | null;
    public ltlExpr(i?: number): LtlExprContext[] | LtlExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LtlExprContext);
        }

        return this.getRuleContext(i, LtlExprContext);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(FormulaParser.AND, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlAnd) {
            return visitor.visitLtlAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtlTrueContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TRUE(): antlr.TerminalNode {
        return this.getToken(FormulaParser.TRUE, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlTrue) {
            return visitor.visitLtlTrue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtlGloballyContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public GLOBALLY(): antlr.TerminalNode {
        return this.getToken(FormulaParser.GLOBALLY, 0)!;
    }
    public ltlExpr(): LtlExprContext {
        return this.getRuleContext(0, LtlExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlGlobally) {
            return visitor.visitLtlGlobally(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtlNotContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(FormulaParser.NOT, 0)!;
    }
    public ltlExpr(): LtlExprContext {
        return this.getRuleContext(0, LtlExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlNot) {
            return visitor.visitLtlNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtlParenContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.LPAREN, 0)!;
    }
    public ltlExpr(): LtlExprContext {
        return this.getRuleContext(0, LtlExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlParen) {
            return visitor.visitLtlParen(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtlEventuallyContext extends LtlExprContext {
    public constructor(ctx: LtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EVENTUALLY(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EVENTUALLY, 0)!;
    }
    public ltlExpr(): LtlExprContext {
        return this.getRuleContext(0, LtlExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitLtlEventually) {
            return visitor.visitLtlEventually(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CtlExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_ctlExpr;
    }
    public override copyFrom(ctx: CtlExprContext): void {
        super.copyFrom(ctx);
    }
}
export class CtlImpliesContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ctlExpr(): CtlExprContext[];
    public ctlExpr(i: number): CtlExprContext | null;
    public ctlExpr(i?: number): CtlExprContext[] | CtlExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CtlExprContext);
        }

        return this.getRuleContext(i, CtlExprContext);
    }
    public IMPLIES(): antlr.TerminalNode {
        return this.getToken(FormulaParser.IMPLIES, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlImplies) {
            return visitor.visitCtlImplies(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlTrueContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TRUE(): antlr.TerminalNode {
        return this.getToken(FormulaParser.TRUE, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlTrue) {
            return visitor.visitCtlTrue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlAfContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FORALL(): antlr.TerminalNode {
        return this.getToken(FormulaParser.FORALL, 0)!;
    }
    public EVENTUALLY(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EVENTUALLY, 0)!;
    }
    public ctlExpr(): CtlExprContext {
        return this.getRuleContext(0, CtlExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlAf) {
            return visitor.visitCtlAf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlAgContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FORALL(): antlr.TerminalNode {
        return this.getToken(FormulaParser.FORALL, 0)!;
    }
    public GLOBALLY(): antlr.TerminalNode {
        return this.getToken(FormulaParser.GLOBALLY, 0)!;
    }
    public ctlExpr(): CtlExprContext {
        return this.getRuleContext(0, CtlExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlAg) {
            return visitor.visitCtlAg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlExContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EXISTS, 0)!;
    }
    public NEXT(): antlr.TerminalNode {
        return this.getToken(FormulaParser.NEXT, 0)!;
    }
    public ctlExpr(): CtlExprContext {
        return this.getRuleContext(0, CtlExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlEx) {
            return visitor.visitCtlEx(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlAuContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FORALL(): antlr.TerminalNode {
        return this.getToken(FormulaParser.FORALL, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.LPAREN, 0)!;
    }
    public ctlExpr(): CtlExprContext[];
    public ctlExpr(i: number): CtlExprContext | null;
    public ctlExpr(i?: number): CtlExprContext[] | CtlExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CtlExprContext);
        }

        return this.getRuleContext(i, CtlExprContext);
    }
    public UNTIL(): antlr.TerminalNode {
        return this.getToken(FormulaParser.UNTIL, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlAu) {
            return visitor.visitCtlAu(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlEuContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EXISTS, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.LPAREN, 0)!;
    }
    public ctlExpr(): CtlExprContext[];
    public ctlExpr(i: number): CtlExprContext | null;
    public ctlExpr(i?: number): CtlExprContext[] | CtlExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CtlExprContext);
        }

        return this.getRuleContext(i, CtlExprContext);
    }
    public UNTIL(): antlr.TerminalNode {
        return this.getToken(FormulaParser.UNTIL, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlEu) {
            return visitor.visitCtlEu(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlParenContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.LPAREN, 0)!;
    }
    public ctlExpr(): CtlExprContext {
        return this.getRuleContext(0, CtlExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlParen) {
            return visitor.visitCtlParen(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlNotContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(FormulaParser.NOT, 0)!;
    }
    public ctlExpr(): CtlExprContext {
        return this.getRuleContext(0, CtlExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlNot) {
            return visitor.visitCtlNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlAxContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FORALL(): antlr.TerminalNode {
        return this.getToken(FormulaParser.FORALL, 0)!;
    }
    public NEXT(): antlr.TerminalNode {
        return this.getToken(FormulaParser.NEXT, 0)!;
    }
    public ctlExpr(): CtlExprContext {
        return this.getRuleContext(0, CtlExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlAx) {
            return visitor.visitCtlAx(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlPropContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PROP(): antlr.TerminalNode {
        return this.getToken(FormulaParser.PROP, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlProp) {
            return visitor.visitCtlProp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlAndContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ctlExpr(): CtlExprContext[];
    public ctlExpr(i: number): CtlExprContext | null;
    public ctlExpr(i?: number): CtlExprContext[] | CtlExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CtlExprContext);
        }

        return this.getRuleContext(i, CtlExprContext);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(FormulaParser.AND, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlAnd) {
            return visitor.visitCtlAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlOrContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ctlExpr(): CtlExprContext[];
    public ctlExpr(i: number): CtlExprContext | null;
    public ctlExpr(i?: number): CtlExprContext[] | CtlExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CtlExprContext);
        }

        return this.getRuleContext(i, CtlExprContext);
    }
    public OR(): antlr.TerminalNode {
        return this.getToken(FormulaParser.OR, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlOr) {
            return visitor.visitCtlOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlEfContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EXISTS, 0)!;
    }
    public EVENTUALLY(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EVENTUALLY, 0)!;
    }
    public ctlExpr(): CtlExprContext {
        return this.getRuleContext(0, CtlExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlEf) {
            return visitor.visitCtlEf(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlEgContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EXISTS, 0)!;
    }
    public GLOBALLY(): antlr.TerminalNode {
        return this.getToken(FormulaParser.GLOBALLY, 0)!;
    }
    public ctlExpr(): CtlExprContext {
        return this.getRuleContext(0, CtlExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlEg) {
            return visitor.visitCtlEg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CtlFalseContext extends CtlExprContext {
    public constructor(ctx: CtlExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FALSE(): antlr.TerminalNode {
        return this.getToken(FormulaParser.FALSE, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitCtlFalse) {
            return visitor.visitCtlFalse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StateExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_stateExpr;
    }
    public override copyFrom(ctx: StateExprContext): void {
        super.copyFrom(ctx);
    }
}
export class StateOrContext extends StateExprContext {
    public constructor(ctx: StateExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public stateExpr(): StateExprContext[];
    public stateExpr(i: number): StateExprContext | null;
    public stateExpr(i?: number): StateExprContext[] | StateExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StateExprContext);
        }

        return this.getRuleContext(i, StateExprContext);
    }
    public OR(): antlr.TerminalNode {
        return this.getToken(FormulaParser.OR, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitStateOr) {
            return visitor.visitStateOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StateTrueContext extends StateExprContext {
    public constructor(ctx: StateExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TRUE(): antlr.TerminalNode {
        return this.getToken(FormulaParser.TRUE, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitStateTrue) {
            return visitor.visitStateTrue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StateForallContext extends StateExprContext {
    public constructor(ctx: StateExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FORALL(): antlr.TerminalNode {
        return this.getToken(FormulaParser.FORALL, 0)!;
    }
    public pathExpr(): PathExprContext {
        return this.getRuleContext(0, PathExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitStateForall) {
            return visitor.visitStateForall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatePropContext extends StateExprContext {
    public constructor(ctx: StateExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PROP(): antlr.TerminalNode {
        return this.getToken(FormulaParser.PROP, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitStateProp) {
            return visitor.visitStateProp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StateFalseContext extends StateExprContext {
    public constructor(ctx: StateExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FALSE(): antlr.TerminalNode {
        return this.getToken(FormulaParser.FALSE, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitStateFalse) {
            return visitor.visitStateFalse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StateAndContext extends StateExprContext {
    public constructor(ctx: StateExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public stateExpr(): StateExprContext[];
    public stateExpr(i: number): StateExprContext | null;
    public stateExpr(i?: number): StateExprContext[] | StateExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StateExprContext);
        }

        return this.getRuleContext(i, StateExprContext);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(FormulaParser.AND, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitStateAnd) {
            return visitor.visitStateAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StateParenContext extends StateExprContext {
    public constructor(ctx: StateExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.LPAREN, 0)!;
    }
    public stateExpr(): StateExprContext {
        return this.getRuleContext(0, StateExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitStateParen) {
            return visitor.visitStateParen(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StateImpliesContext extends StateExprContext {
    public constructor(ctx: StateExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public stateExpr(): StateExprContext[];
    public stateExpr(i: number): StateExprContext | null;
    public stateExpr(i?: number): StateExprContext[] | StateExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StateExprContext);
        }

        return this.getRuleContext(i, StateExprContext);
    }
    public IMPLIES(): antlr.TerminalNode {
        return this.getToken(FormulaParser.IMPLIES, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitStateImplies) {
            return visitor.visitStateImplies(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StateNotContext extends StateExprContext {
    public constructor(ctx: StateExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(FormulaParser.NOT, 0)!;
    }
    public stateExpr(): StateExprContext {
        return this.getRuleContext(0, StateExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitStateNot) {
            return visitor.visitStateNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StateExistsContext extends StateExprContext {
    public constructor(ctx: StateExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EXISTS, 0)!;
    }
    public pathExpr(): PathExprContext {
        return this.getRuleContext(0, PathExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitStateExists) {
            return visitor.visitStateExists(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PathExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FormulaParser.RULE_pathExpr;
    }
    public override copyFrom(ctx: PathExprContext): void {
        super.copyFrom(ctx);
    }
}
export class PathParenContext extends PathExprContext {
    public constructor(ctx: PathExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.LPAREN, 0)!;
    }
    public pathExpr(): PathExprContext {
        return this.getRuleContext(0, PathExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(FormulaParser.RPAREN, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitPathParen) {
            return visitor.visitPathParen(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathNextContext extends PathExprContext {
    public constructor(ctx: PathExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NEXT(): antlr.TerminalNode {
        return this.getToken(FormulaParser.NEXT, 0)!;
    }
    public pathExpr(): PathExprContext {
        return this.getRuleContext(0, PathExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitPathNext) {
            return visitor.visitPathNext(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathNotContext extends PathExprContext {
    public constructor(ctx: PathExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(FormulaParser.NOT, 0)!;
    }
    public pathExpr(): PathExprContext {
        return this.getRuleContext(0, PathExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitPathNot) {
            return visitor.visitPathNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathGloballyContext extends PathExprContext {
    public constructor(ctx: PathExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public GLOBALLY(): antlr.TerminalNode {
        return this.getToken(FormulaParser.GLOBALLY, 0)!;
    }
    public pathExpr(): PathExprContext {
        return this.getRuleContext(0, PathExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitPathGlobally) {
            return visitor.visitPathGlobally(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathUntilContext extends PathExprContext {
    public constructor(ctx: PathExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public pathExpr(): PathExprContext[];
    public pathExpr(i: number): PathExprContext | null;
    public pathExpr(i?: number): PathExprContext[] | PathExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PathExprContext);
        }

        return this.getRuleContext(i, PathExprContext);
    }
    public UNTIL(): antlr.TerminalNode {
        return this.getToken(FormulaParser.UNTIL, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitPathUntil) {
            return visitor.visitPathUntil(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathOrContext extends PathExprContext {
    public constructor(ctx: PathExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public pathExpr(): PathExprContext[];
    public pathExpr(i: number): PathExprContext | null;
    public pathExpr(i?: number): PathExprContext[] | PathExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PathExprContext);
        }

        return this.getRuleContext(i, PathExprContext);
    }
    public OR(): antlr.TerminalNode {
        return this.getToken(FormulaParser.OR, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitPathOr) {
            return visitor.visitPathOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathAndContext extends PathExprContext {
    public constructor(ctx: PathExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public pathExpr(): PathExprContext[];
    public pathExpr(i: number): PathExprContext | null;
    public pathExpr(i?: number): PathExprContext[] | PathExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PathExprContext);
        }

        return this.getRuleContext(i, PathExprContext);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(FormulaParser.AND, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitPathAnd) {
            return visitor.visitPathAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathStateContext extends PathExprContext {
    public constructor(ctx: PathExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public stateExpr(): StateExprContext {
        return this.getRuleContext(0, StateExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitPathState) {
            return visitor.visitPathState(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathImpliesContext extends PathExprContext {
    public constructor(ctx: PathExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public pathExpr(): PathExprContext[];
    public pathExpr(i: number): PathExprContext | null;
    public pathExpr(i?: number): PathExprContext[] | PathExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PathExprContext);
        }

        return this.getRuleContext(i, PathExprContext);
    }
    public IMPLIES(): antlr.TerminalNode {
        return this.getToken(FormulaParser.IMPLIES, 0)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitPathImplies) {
            return visitor.visitPathImplies(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PathEventuallyContext extends PathExprContext {
    public constructor(ctx: PathExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EVENTUALLY(): antlr.TerminalNode {
        return this.getToken(FormulaParser.EVENTUALLY, 0)!;
    }
    public pathExpr(): PathExprContext {
        return this.getRuleContext(0, PathExprContext)!;
    }
    public override accept<Result>(visitor: FormulaVisitor<Result>): Result | null {
        if (visitor.visitPathEventually) {
            return visitor.visitPathEventually(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
