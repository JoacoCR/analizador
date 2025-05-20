// Generated from MiniJavaScript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniJavaScriptVisitor from './MiniJavaScriptVisitor.js';

const serializedATN = [4,1,18,76,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,1,
1,1,3,1,28,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,5,5,53,8,5,10,5,12,5,56,9,5,1,5,1,5,1,
6,1,6,1,6,5,6,63,8,6,10,6,12,6,66,9,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,74,8,7,
1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,12,15,74,0,19,1,0,0,0,2,27,1,0,0,0,
4,29,1,0,0,0,6,37,1,0,0,0,8,42,1,0,0,0,10,50,1,0,0,0,12,59,1,0,0,0,14,73,
1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,
0,0,0,20,22,1,0,0,0,21,19,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,28,3,4,2,
0,25,28,3,6,3,0,26,28,3,8,4,0,27,24,1,0,0,0,27,25,1,0,0,0,27,26,1,0,0,0,
28,3,1,0,0,0,29,30,5,1,0,0,30,31,3,10,5,0,31,32,5,2,0,0,32,33,5,3,0,0,33,
34,3,12,6,0,34,35,5,4,0,0,35,36,5,5,0,0,36,5,1,0,0,0,37,38,5,16,0,0,38,39,
5,6,0,0,39,40,3,12,6,0,40,41,5,5,0,0,41,7,1,0,0,0,42,43,5,7,0,0,43,44,5,
8,0,0,44,45,5,9,0,0,45,46,5,3,0,0,46,47,3,12,6,0,47,48,5,4,0,0,48,49,5,5,
0,0,49,9,1,0,0,0,50,54,5,10,0,0,51,53,3,2,1,0,52,51,1,0,0,0,53,56,1,0,0,
0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,0,0,56,54,1,0,0,0,57,58,5,11,0,0,
58,11,1,0,0,0,59,64,3,14,7,0,60,61,7,0,0,0,61,63,3,14,7,0,62,60,1,0,0,0,
63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,13,1,0,0,0,66,64,1,0,0,0,67,
74,5,16,0,0,68,74,5,17,0,0,69,70,5,3,0,0,70,71,3,12,6,0,71,72,5,4,0,0,72,
74,1,0,0,0,73,67,1,0,0,0,73,68,1,0,0,0,73,69,1,0,0,0,74,15,1,0,0,0,5,19,
27,54,64,73];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniJavaScriptParser extends antlr4.Parser {

    static grammarFileName = "MiniJavaScript.g4";
    static literalNames = [ null, "'do'", "'while'", "'('", "')'", "';'", 
                            "'='", "'console'", "'.'", "'log'", "'{'", "'}'", 
                            "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "Identifier", "Number", "WS" ];
    static ruleNames = [ "program", "statement", "doWhileStatement", "assignmentStatement", 
                         "consoleStatement", "block", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniJavaScriptParser.ruleNames;
        this.literalNames = MiniJavaScriptParser.literalNames;
        this.symbolicNames = MiniJavaScriptParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniJavaScriptParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65666) !== 0)) {
	            this.state = 16;
	            this.statement();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(MiniJavaScriptParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniJavaScriptParser.RULE_statement);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.doWhileStatement();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.assignmentStatement();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 26;
	            this.consoleStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doWhileStatement() {
	    let localctx = new DoWhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniJavaScriptParser.RULE_doWhileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(MiniJavaScriptParser.T__0);
	        this.state = 30;
	        this.block();
	        this.state = 31;
	        this.match(MiniJavaScriptParser.T__1);
	        this.state = 32;
	        this.match(MiniJavaScriptParser.T__2);
	        this.state = 33;
	        this.expression();
	        this.state = 34;
	        this.match(MiniJavaScriptParser.T__3);
	        this.state = 35;
	        this.match(MiniJavaScriptParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniJavaScriptParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(MiniJavaScriptParser.Identifier);
	        this.state = 38;
	        this.match(MiniJavaScriptParser.T__5);
	        this.state = 39;
	        this.expression();
	        this.state = 40;
	        this.match(MiniJavaScriptParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniJavaScriptParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(MiniJavaScriptParser.T__6);
	        this.state = 43;
	        this.match(MiniJavaScriptParser.T__7);
	        this.state = 44;
	        this.match(MiniJavaScriptParser.T__8);
	        this.state = 45;
	        this.match(MiniJavaScriptParser.T__2);
	        this.state = 46;
	        this.expression();
	        this.state = 47;
	        this.match(MiniJavaScriptParser.T__3);
	        this.state = 48;
	        this.match(MiniJavaScriptParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniJavaScriptParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(MiniJavaScriptParser.T__9);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65666) !== 0)) {
	            this.state = 51;
	            this.statement();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
	        this.match(MiniJavaScriptParser.T__10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniJavaScriptParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.term();
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0)) {
	            this.state = 60;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 61;
	            this.term();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniJavaScriptParser.RULE_term);
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.match(MiniJavaScriptParser.Identifier);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 68;
	            this.match(MiniJavaScriptParser.Number);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 69;
	            this.match(MiniJavaScriptParser.T__2);
	            this.state = 70;
	            this.expression();
	            this.state = 71;
	            this.match(MiniJavaScriptParser.T__3);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniJavaScriptParser.EOF = antlr4.Token.EOF;
MiniJavaScriptParser.T__0 = 1;
MiniJavaScriptParser.T__1 = 2;
MiniJavaScriptParser.T__2 = 3;
MiniJavaScriptParser.T__3 = 4;
MiniJavaScriptParser.T__4 = 5;
MiniJavaScriptParser.T__5 = 6;
MiniJavaScriptParser.T__6 = 7;
MiniJavaScriptParser.T__7 = 8;
MiniJavaScriptParser.T__8 = 9;
MiniJavaScriptParser.T__9 = 10;
MiniJavaScriptParser.T__10 = 11;
MiniJavaScriptParser.T__11 = 12;
MiniJavaScriptParser.T__12 = 13;
MiniJavaScriptParser.T__13 = 14;
MiniJavaScriptParser.T__14 = 15;
MiniJavaScriptParser.Identifier = 16;
MiniJavaScriptParser.Number = 17;
MiniJavaScriptParser.WS = 18;

MiniJavaScriptParser.RULE_program = 0;
MiniJavaScriptParser.RULE_statement = 1;
MiniJavaScriptParser.RULE_doWhileStatement = 2;
MiniJavaScriptParser.RULE_assignmentStatement = 3;
MiniJavaScriptParser.RULE_consoleStatement = 4;
MiniJavaScriptParser.RULE_block = 5;
MiniJavaScriptParser.RULE_expression = 6;
MiniJavaScriptParser.RULE_term = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_program;
    }

	EOF() {
	    return this.getToken(MiniJavaScriptParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_statement;
    }

	doWhileStatement() {
	    return this.getTypedRuleContext(DoWhileStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DoWhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_doWhileStatement;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitDoWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_assignmentStatement;
    }

	Identifier() {
	    return this.getToken(MiniJavaScriptParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_consoleStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_term;
    }

	Identifier() {
	    return this.getToken(MiniJavaScriptParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(MiniJavaScriptParser.Number, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniJavaScriptParser.ProgramContext = ProgramContext; 
MiniJavaScriptParser.StatementContext = StatementContext; 
MiniJavaScriptParser.DoWhileStatementContext = DoWhileStatementContext; 
MiniJavaScriptParser.AssignmentStatementContext = AssignmentStatementContext; 
MiniJavaScriptParser.ConsoleStatementContext = ConsoleStatementContext; 
MiniJavaScriptParser.BlockContext = BlockContext; 
MiniJavaScriptParser.ExpressionContext = ExpressionContext; 
MiniJavaScriptParser.TermContext = TermContext; 
