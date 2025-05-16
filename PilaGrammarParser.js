// Generated from PilaGrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PilaGrammarListener from './PilaGrammarListener.js';
const serializedATN = [4,1,18,74,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,26,8,1,10,
1,12,1,29,9,1,1,2,1,2,1,2,1,2,3,2,35,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,
1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,
1,8,1,8,5,8,65,8,8,10,8,12,8,68,9,8,3,8,70,8,8,1,8,1,8,1,8,0,0,9,0,2,4,6,
8,10,12,14,16,0,1,1,0,15,16,70,0,18,1,0,0,0,2,27,1,0,0,0,4,34,1,0,0,0,6,
36,1,0,0,0,8,42,1,0,0,0,10,48,1,0,0,0,12,53,1,0,0,0,14,58,1,0,0,0,16,60,
1,0,0,0,18,19,5,1,0,0,19,20,5,14,0,0,20,21,5,2,0,0,21,22,3,2,1,0,22,23,5,
3,0,0,23,1,1,0,0,0,24,26,3,4,2,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,
0,27,28,1,0,0,0,28,3,1,0,0,0,29,27,1,0,0,0,30,35,3,8,4,0,31,35,3,10,5,0,
32,35,3,12,6,0,33,35,3,6,3,0,34,30,1,0,0,0,34,31,1,0,0,0,34,32,1,0,0,0,34,
33,1,0,0,0,35,5,1,0,0,0,36,37,5,4,0,0,37,38,5,5,0,0,38,39,3,16,8,0,39,40,
5,6,0,0,40,41,5,7,0,0,41,7,1,0,0,0,42,43,5,8,0,0,43,44,5,5,0,0,44,45,3,14,
7,0,45,46,5,6,0,0,46,47,5,7,0,0,47,9,1,0,0,0,48,49,5,9,0,0,49,50,5,5,0,0,
50,51,5,6,0,0,51,52,5,7,0,0,52,11,1,0,0,0,53,54,5,10,0,0,54,55,5,5,0,0,55,
56,5,6,0,0,56,57,5,7,0,0,57,13,1,0,0,0,58,59,7,0,0,0,59,15,1,0,0,0,60,69,
5,11,0,0,61,66,3,14,7,0,62,63,5,12,0,0,63,65,3,14,7,0,64,62,1,0,0,0,65,68,
1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,69,61,1,
0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,72,5,13,0,0,72,17,1,0,0,0,4,27,34,66,
69];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PilaGrammarParser extends antlr4.Parser {

    static grammarFileName = "PilaGrammar.g4";
    static literalNames = [ null, "'pila'", "'{'", "'}'", "'crear'", "'('", 
                            "')'", "'!'", "'empujar'", "'sacar'", "'mirar'", 
                            "'['", "','", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "NOMBRE", 
                             "NUMERO", "TEXTO", "WS", "COMMENT" ];
    static ruleNames = [ "programa", "comandos", "operacion", "crear", "push", 
                         "pop", "peek", "valor", "lista" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PilaGrammarParser.ruleNames;
        this.literalNames = PilaGrammarParser.literalNames;
        this.symbolicNames = PilaGrammarParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PilaGrammarParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(PilaGrammarParser.T__0);
	        this.state = 19;
	        this.match(PilaGrammarParser.NOMBRE);
	        this.state = 20;
	        this.match(PilaGrammarParser.T__1);
	        this.state = 21;
	        this.comandos();
	        this.state = 22;
	        this.match(PilaGrammarParser.T__2);
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



	comandos() {
	    let localctx = new ComandosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PilaGrammarParser.RULE_comandos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1808) !== 0)) {
	            this.state = 24;
	            this.operacion();
	            this.state = 29;
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



	operacion() {
	    let localctx = new OperacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PilaGrammarParser.RULE_operacion);
	    try {
	        this.state = 34;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.push();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.pop();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.peek();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 33;
	            this.crear();
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
	    this.enterRule(localctx, 6, PilaGrammarParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(PilaGrammarParser.T__3);
	        this.state = 37;
	        this.match(PilaGrammarParser.T__4);
	        this.state = 38;
	        this.lista();
	        this.state = 39;
	        this.match(PilaGrammarParser.T__5);
	        this.state = 40;
	        this.match(PilaGrammarParser.T__6);
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



	push() {
	    let localctx = new PushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PilaGrammarParser.RULE_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(PilaGrammarParser.T__7);
	        this.state = 43;
	        this.match(PilaGrammarParser.T__4);
	        this.state = 44;
	        this.valor();
	        this.state = 45;
	        this.match(PilaGrammarParser.T__5);
	        this.state = 46;
	        this.match(PilaGrammarParser.T__6);
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



	pop() {
	    let localctx = new PopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PilaGrammarParser.RULE_pop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(PilaGrammarParser.T__8);
	        this.state = 49;
	        this.match(PilaGrammarParser.T__4);
	        this.state = 50;
	        this.match(PilaGrammarParser.T__5);
	        this.state = 51;
	        this.match(PilaGrammarParser.T__6);
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



	peek() {
	    let localctx = new PeekContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PilaGrammarParser.RULE_peek);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(PilaGrammarParser.T__9);
	        this.state = 54;
	        this.match(PilaGrammarParser.T__4);
	        this.state = 55;
	        this.match(PilaGrammarParser.T__5);
	        this.state = 56;
	        this.match(PilaGrammarParser.T__6);
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



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PilaGrammarParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PilaGrammarParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(PilaGrammarParser.T__10);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15 || _la===16) {
	            this.state = 61;
	            this.valor();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===12) {
	                this.state = 62;
	                this.match(PilaGrammarParser.T__11);
	                this.state = 63;
	                this.valor();
	                this.state = 68;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 71;
	        this.match(PilaGrammarParser.T__12);
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

PilaGrammarParser.EOF = antlr4.Token.EOF;
PilaGrammarParser.T__0 = 1;
PilaGrammarParser.T__1 = 2;
PilaGrammarParser.T__2 = 3;
PilaGrammarParser.T__3 = 4;
PilaGrammarParser.T__4 = 5;
PilaGrammarParser.T__5 = 6;
PilaGrammarParser.T__6 = 7;
PilaGrammarParser.T__7 = 8;
PilaGrammarParser.T__8 = 9;
PilaGrammarParser.T__9 = 10;
PilaGrammarParser.T__10 = 11;
PilaGrammarParser.T__11 = 12;
PilaGrammarParser.T__12 = 13;
PilaGrammarParser.NOMBRE = 14;
PilaGrammarParser.NUMERO = 15;
PilaGrammarParser.TEXTO = 16;
PilaGrammarParser.WS = 17;
PilaGrammarParser.COMMENT = 18;

PilaGrammarParser.RULE_programa = 0;
PilaGrammarParser.RULE_comandos = 1;
PilaGrammarParser.RULE_operacion = 2;
PilaGrammarParser.RULE_crear = 3;
PilaGrammarParser.RULE_push = 4;
PilaGrammarParser.RULE_pop = 5;
PilaGrammarParser.RULE_peek = 6;
PilaGrammarParser.RULE_valor = 7;
PilaGrammarParser.RULE_lista = 8;

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
        this.ruleIndex = PilaGrammarParser.RULE_programa;
    }

	NOMBRE() {
	    return this.getToken(PilaGrammarParser.NOMBRE, 0);
	};

	comandos() {
	    return this.getTypedRuleContext(ComandosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class ComandosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaGrammarParser.RULE_comandos;
    }

	operacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionContext);
	    } else {
	        return this.getTypedRuleContext(OperacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.enterComandos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.exitComandos(this);
		}
	}


}



class OperacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaGrammarParser.RULE_operacion;
    }

	push() {
	    return this.getTypedRuleContext(PushContext,0);
	};

	pop() {
	    return this.getTypedRuleContext(PopContext,0);
	};

	peek() {
	    return this.getTypedRuleContext(PeekContext,0);
	};

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.enterOperacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.exitOperacion(this);
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
        this.ruleIndex = PilaGrammarParser.RULE_crear;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.exitCrear(this);
		}
	}


}



class PushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaGrammarParser.RULE_push;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.enterPush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.exitPush(this);
		}
	}


}



class PopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaGrammarParser.RULE_pop;
    }


	enterRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.enterPop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.exitPop(this);
		}
	}


}



class PeekContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaGrammarParser.RULE_peek;
    }


	enterRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.enterPeek(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.exitPeek(this);
		}
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaGrammarParser.RULE_valor;
    }

	NUMERO() {
	    return this.getToken(PilaGrammarParser.NUMERO, 0);
	};

	TEXTO() {
	    return this.getToken(PilaGrammarParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.exitValor(this);
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
        this.ruleIndex = PilaGrammarParser.RULE_lista;
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaGrammarListener ) {
	        listener.exitLista(this);
		}
	}


}




PilaGrammarParser.ProgramaContext = ProgramaContext; 
PilaGrammarParser.ComandosContext = ComandosContext; 
PilaGrammarParser.OperacionContext = OperacionContext; 
PilaGrammarParser.CrearContext = CrearContext; 
PilaGrammarParser.PushContext = PushContext; 
PilaGrammarParser.PopContext = PopContext; 
PilaGrammarParser.PeekContext = PeekContext; 
PilaGrammarParser.ValorContext = ValorContext; 
PilaGrammarParser.ListaContext = ListaContext; 
