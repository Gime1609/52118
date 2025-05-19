import antlr4 from 'antlr4';
import fs from 'fs';

import PilaGrammarLexer from './generated/pilagrammarLexer.js';
import PilaGrammarParser from './generated/pilagrammarParser.js';
import PilaGrammarListener from './generated/pilagrammarListener.js';

// Listener para capturar errores sintácticos
class ErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push({ line, column, message: msg });
    }
}

// Listener para construir el árbol sintáctico en texto
class TreeGenerator extends PilaGrammarListener {
    constructor() {
        super();
        this.tree = '';
        this.depth = 0;
    }
    enterEveryRule(ctx) {
        const ruleName = PilaGrammarParser.ruleNames[ctx.ruleIndex];
        this.tree += ' '.repeat(this.depth * 2) + ruleName + '\n';
        this.depth++;
    }
    exitEveryRule() {
        this.depth--;
    }
    getTree() {
        return this.tree;
    }
}

// Listener para traducir a JavaScript
class JSGenerator extends PilaGrammarListener {
    constructor() {
        super();
        this.jsCode = '';
        this.pilaNombre = '';
    }

    enterPrograma(ctx) {
        this.pilaNombre = ctx.NOMBRE().getText();
        this.jsCode += `let ${this.pilaNombre} = [];\n`;
    }

    enterCrear(ctx) {
        const lista = ctx.lista().getText(); // Ej: [1,2,3]
        this.jsCode += `${this.pilaNombre} = ${lista};\n`;
    }

    enterEmpujar(ctx) {
        const num = ctx.NUMERO().getText();
        this.jsCode += `${this.pilaNombre}.push(${num});\n`;
    }

    getJS() {
        return this.jsCode;
    }
}

function mostrarTablaTokens(tokens, lexer) {
    console.log('Tabla de lexemas (tokens):');
    console.log('---------------------------------------------');
    console.log('Tipo\t\tLexema\t\tLínea\tColumna');
    console.log('---------------------------------------------');
    tokens.tokens.forEach(token => {
        if (token.type > 0) { // Ignora EOF y tokens inválidos
            const tipo = lexer.symbolicNames[token.type] || token.type;
            const lexema = token.text.replace(/\n/g, '\\n');
            console.log(`${tipo}\t\t${lexema}\t\t${token.line}\t${token.column}`);
        }
    });
    console.log('---------------------------------------------\n');
}

function analizar(inputPath) {
    const input = fs.readFileSync(inputPath, 'utf8');
    const chars = new antlr4.InputStream(input);
    const lexer = new PilaGrammarLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);

    // Mostrar tabla de tokens
    tokens.fill();
    mostrarTablaTokens(tokens, PilaGrammarLexer);

    const parser = new PilaGrammarParser(tokens);
    parser.buildParseTrees = true;

    // Listener de errores
    const errorListener = new ErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    const tree = parser.programa();

    if (errorListener.errors.length > 0) {
        console.error('Errores sintácticos encontrados:');
        errorListener.errors.forEach(e =>
            console.error(`Línea ${e.line}, columna ${e.column}: ${e.message}`)
        );
        return;
    }

    // Árbol sintáctico
    const treeGenerator = new TreeGenerator();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(treeGenerator, tree);
    console.log('Árbol sintáctico:\n' + treeGenerator.getTree());

    // Generación de código JavaScript
    const jsGenerator = new JSGenerator();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(jsGenerator, tree);
    const jsCode = jsGenerator.getJS();
    console.log('\nCódigo JavaScript generado:\n' + jsCode);

    // Ejecución del código generado
    console.log('\nEjecución del código:');
    eval(jsCode + `\nconsole.log(${jsGenerator.pilaNombre});`);
}

const inputPath = process.argv[2] || 'input.txt';
analizar(inputPath);