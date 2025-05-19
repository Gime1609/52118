// Generated from c:/Users/sanch/Documents/analizador-lenguaje-pila/pilagrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import pilagrammarListener from './pilagrammarListener.js';
import pilagrammarVisitor from './pilagrammarVisitor.js';

const serializedATN = [4,1,14,51,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,0,5,0,15,8,0,10,0,12,0,18,9,0,1,0,1,0,1,1,1,1,3,1,24,8,1,1,
2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,42,8,4,
10,4,12,4,45,9,4,3,4,47,8,4,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,0,49,0,10,1,0,
0,0,2,23,1,0,0,0,4,25,1,0,0,0,6,31,1,0,0,0,8,37,1,0,0,0,10,11,5,1,0,0,11,
12,5,12,0,0,12,16,5,2,0,0,13,15,3,2,1,0,14,13,1,0,0,0,15,18,1,0,0,0,16,14,
1,0,0,0,16,17,1,0,0,0,17,19,1,0,0,0,18,16,1,0,0,0,19,20,5,3,0,0,20,1,1,0,
0,0,21,24,3,4,2,0,22,24,3,6,3,0,23,21,1,0,0,0,23,22,1,0,0,0,24,3,1,0,0,0,
25,26,5,4,0,0,26,27,5,5,0,0,27,28,3,8,4,0,28,29,5,6,0,0,29,30,5,7,0,0,30,
5,1,0,0,0,31,32,5,8,0,0,32,33,5,5,0,0,33,34,5,13,0,0,34,35,5,6,0,0,35,36,
5,7,0,0,36,7,1,0,0,0,37,46,5,9,0,0,38,43,5,13,0,0,39,40,5,10,0,0,40,42,5,
13,0,0,41,39,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,47,1,0,
0,0,45,43,1,0,0,0,46,38,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,0,48,49,5,11,0,
0,49,9,1,0,0,0,4,16,23,43,46];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class pilagrammarParser extends antlr4.Parser {

    static grammarFileName = "pilagrammar.g4";
    static literalNames = [ null, "'pila'", "'{'", "'}'", "'crear'", "'('", 
                            "')'", "'!'", "'empujar'", "'['", "','", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "NOMBRE", "NUMERO", 
                             "WS" ];
    static ruleNames = [ "programa", "instruccion", "crear", "empujar", 
                         "lista" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pilagrammarParser.ruleNames;
        this.literalNames = pilagrammarParser.literalNames;
        this.symbolicNames = pilagrammarParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pilagrammarParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(pilagrammarParser.T__0);
	        this.state = 11;
	        this.match(pilagrammarParser.NOMBRE);
	        this.state = 12;
	        this.match(pilagrammarParser.T__1);
	        this.state = 16;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===8) {
	            this.state = 13;
	            this.instruccion();
	            this.state = 18;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 19;
	        this.match(pilagrammarParser.T__2);
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



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, pilagrammarParser.RULE_instruccion);
	    try {
	        this.state = 23;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.crear();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.empujar();
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



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pilagrammarParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(pilagrammarParser.T__3);
	        this.state = 26;
	        this.match(pilagrammarParser.T__4);
	        this.state = 27;
	        this.lista();
	        this.state = 28;
	        this.match(pilagrammarParser.T__5);
	        this.state = 29;
	        this.match(pilagrammarParser.T__6);
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



	empujar() {
	    let localctx = new EmpujarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, pilagrammarParser.RULE_empujar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(pilagrammarParser.T__7);
	        this.state = 32;
	        this.match(pilagrammarParser.T__4);
	        this.state = 33;
	        this.match(pilagrammarParser.NUMERO);
	        this.state = 34;
	        this.match(pilagrammarParser.T__5);
	        this.state = 35;
	        this.match(pilagrammarParser.T__6);
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



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, pilagrammarParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(pilagrammarParser.T__8);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 38;
	            this.match(pilagrammarParser.NUMERO);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===10) {
	                this.state = 39;
	                this.match(pilagrammarParser.T__9);
	                this.state = 40;
	                this.match(pilagrammarParser.NUMERO);
	                this.state = 45;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 48;
	        this.match(pilagrammarParser.T__10);
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

pilagrammarParser.EOF = antlr4.Token.EOF;
pilagrammarParser.T__0 = 1;
pilagrammarParser.T__1 = 2;
pilagrammarParser.T__2 = 3;
pilagrammarParser.T__3 = 4;
pilagrammarParser.T__4 = 5;
pilagrammarParser.T__5 = 6;
pilagrammarParser.T__6 = 7;
pilagrammarParser.T__7 = 8;
pilagrammarParser.T__8 = 9;
pilagrammarParser.T__9 = 10;
pilagrammarParser.T__10 = 11;
pilagrammarParser.NOMBRE = 12;
pilagrammarParser.NUMERO = 13;
pilagrammarParser.WS = 14;

pilagrammarParser.RULE_programa = 0;
pilagrammarParser.RULE_instruccion = 1;
pilagrammarParser.RULE_crear = 2;
pilagrammarParser.RULE_empujar = 3;
pilagrammarParser.RULE_lista = 4;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pilagrammarParser.RULE_programa;
    }

	NOMBRE() {
	    return this.getToken(pilagrammarParser.NOMBRE, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pilagrammarListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pilagrammarListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pilagrammarVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pilagrammarParser.RULE_instruccion;
    }

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	empujar() {
	    return this.getTypedRuleContext(EmpujarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pilagrammarListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pilagrammarListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pilagrammarVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pilagrammarParser.RULE_crear;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pilagrammarListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pilagrammarListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pilagrammarVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmpujarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pilagrammarParser.RULE_empujar;
    }

	NUMERO() {
	    return this.getToken(pilagrammarParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pilagrammarListener ) {
	        listener.enterEmpujar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pilagrammarListener ) {
	        listener.exitEmpujar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pilagrammarVisitor ) {
	        return visitor.visitEmpujar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pilagrammarParser.RULE_lista;
    }

	NUMERO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(pilagrammarParser.NUMERO);
	    } else {
	        return this.getToken(pilagrammarParser.NUMERO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof pilagrammarListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pilagrammarListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof pilagrammarVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




pilagrammarParser.ProgramaContext = ProgramaContext; 
pilagrammarParser.InstruccionContext = InstruccionContext; 
pilagrammarParser.CrearContext = CrearContext; 
pilagrammarParser.EmpujarContext = EmpujarContext; 
pilagrammarParser.ListaContext = ListaContext; 
