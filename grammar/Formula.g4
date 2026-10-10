grammar Formula;

ltlFormula: ltlExpr EOF;
ctlFormula: ctlExpr EOF;
ctlStarFormula: stateExpr EOF;

ltlExpr
    : NOT ltlExpr                               # LtlNot
    | NEXT ltlExpr                              # LtlNext
    | EVENTUALLY ltlExpr                        # LtlEventually
    | GLOBALLY ltlExpr                          # LtlGlobally
    | ltlExpr UNTIL ltlExpr                     # LtlUntil
    | ltlExpr AND ltlExpr                       # LtlAnd
    | ltlExpr OR ltlExpr                        # LtlOr
    | <assoc = right> ltlExpr IMPLIES ltlExpr   # LtlImplies
    | TRUE                                      # LtlTrue
    | FALSE                                     # LtlFalse
    | PROP                                      # LtlProp
    | LPAREN ltlExpr RPAREN                     # LtlParen
    ;

ctlExpr
    : NOT ctlExpr                                 # CtlNot
    | FORALL NEXT ctlExpr                         # CtlAx
    | EXISTS NEXT ctlExpr                         # CtlEx
    | FORALL EVENTUALLY ctlExpr                   # CtlAf
    | EXISTS EVENTUALLY ctlExpr                   # CtlEf
    | FORALL GLOBALLY ctlExpr                     # CtlAg
    | EXISTS GLOBALLY ctlExpr                     # CtlEg
    | FORALL LPAREN ctlExpr UNTIL ctlExpr RPAREN  # CtlAu
    | EXISTS LPAREN ctlExpr UNTIL ctlExpr RPAREN  # CtlEu
    | ctlExpr AND ctlExpr                         # CtlAnd
    | ctlExpr OR ctlExpr                          # CtlOr
    | <assoc = right> ctlExpr IMPLIES ctlExpr     # CtlImplies
    | TRUE                                        # CtlTrue
    | FALSE                                       # CtlFalse
    | PROP                                        # CtlProp
    | LPAREN ctlExpr RPAREN                       # CtlParen
    ;

stateExpr
    : NOT stateExpr                                  # StateNot
    | FORALL pathExpr                                # StateForall
    | EXISTS pathExpr                                # StateExists
    | stateExpr AND stateExpr                        # StateAnd
    | stateExpr OR stateExpr                         # StateOr
    | <assoc = right> stateExpr IMPLIES stateExpr    # StateImplies
    | TRUE                                           # StateTrue
    | FALSE                                          # StateFalse
    | PROP                                           # StateProp
    | LPAREN stateExpr RPAREN                        # StateParen
    ;

pathExpr
    : NOT pathExpr                                  # PathNot
    | NEXT pathExpr                                 # PathNext
    | EVENTUALLY pathExpr                           # PathEventually
    | GLOBALLY pathExpr                             # PathGlobally
    | pathExpr UNTIL pathExpr                       # PathUntil
    | pathExpr AND pathExpr                         # PathAnd
    | pathExpr OR pathExpr                          # PathOr
    | <assoc = right> pathExpr IMPLIES pathExpr     # PathImplies
    | stateExpr                                     # PathState
    | LPAREN pathExpr RPAREN                        # PathParen
    ;

NOT: '¬';
AND: '∧';
OR: '∨';
IMPLIES: '⇒';
TRUE: '⊤';
FALSE: '⊥';
NEXT: 'X';
EVENTUALLY: 'F';
GLOBALLY: 'G';
UNTIL: 'U';
FORALL: 'A';
EXISTS: 'E';
LPAREN: '(';
RPAREN: ')';
PROP: [a-zα-ω] [a-z0-9_α-ω]*;
WS: [ \t\r\n]+ -> skip;
