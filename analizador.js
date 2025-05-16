// Importamos las dependencias necesarias de ANTLR4
const antlr4 = require('antlr4');
const fs = require('fs');

// Importamos los analizadores generados por ANTLR4
// (Asumimos que ya se han generado utilizando la gramática)
const PilaLexer = require('./PilaLexer').PilaLexer;
const PilaParser = require('./PilaParser').PilaParser;
const PilaListener = require('./PilaListener').PilaListener;

// Clase para recolectar errores de sintaxis
class ErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({
      line: line,
      column: column,
      message: msg
    });
  }
}

// Clase para generar la tabla de tokens
class TokenCollector {
  constructor(tokens) {
    this.tokens = tokens;
    this.tokenTable = [];
  }

  collect() {
    for (let i = 0; i < this.tokens.getNumberOfOnChannelTokens(); i++) {
      const token = this.tokens.get(i);
      if (token.type > 0) { // Ignorar EOF
        this.tokenTable.push({
          tipo: this.getTokenName(token.type),
          lexema: token.text,
          linea: token.line,
          columna: token.column
        });
      }
    }
    return this.tokenTable;
  }

  getTokenName(tokenType) {
    const symbolicNames = PilaLexer.symbolicNames;
    if (tokenType < symbolicNames.length) {
      return symbolicNames[tokenType];
    } else {
      return tokenType.toString();
    }
  }
}

// Clase para construir el árbol sintáctico en formato de texto
class TreeBuilder extends PilaListener {
  constructor() {
    super();
    this.tree = '';
    this.depth = 0;
  }

  enterEveryRule(ctx) {
    const ruleName = PilaParser.ruleNames[ctx.ruleIndex];
    this.tree += '  '.repeat(this.depth) + ruleName + '\n';
    this.depth++;
  }

  exitEveryRule(ctx) {
    this.depth--;
  }
}

// Clase para interpretar y traducir el código a JavaScript
class Interpreter extends PilaListener {
  constructor() {
    super();
    this.jsCode = '';
    this.currentPila = null;
  }

  enterPrograma(ctx) {
    const nombre = ctx.NOMBRE().getText();
    this.jsCode += `// Programa '${nombre}' traducido a JavaScript\n`;
    this.jsCode += `// Implementación sin clases (solo arrays)\n`;
  }

  enterCrear(ctx) {
    const lista = ctx.lista().getText();
    // Convertir [10,20,30] a formato JavaScript
    let jsLista = lista.replace(/\s+/g, '');
    this.jsCode += `let pila = ${jsLista}; // crear${ctx.getText().substring(5)}\n`;
    this.currentPila = 'pila';
  }

  enterPush(ctx) {
    const valor = ctx.valor().getText();
    this.jsCode += `${this.currentPila}.push(${valor}); // empujar(${valor})\n`;
  }

  enterPop(ctx) {
    this.jsCode += `${this.currentPila}.pop(); // sacar()\n`;
  }

  enterPeek(ctx) {
    this.jsCode += `console.log(${this.currentPila}[${this.currentPila}.length - 1]); // mirar()\n`;
  }
}

// Función principal del analizador
function analizar(inputText) {
  // 1. Análisis léxico
  const chars = new antlr4.InputStream(inputText);
  const lexer = new PilaLexer(chars);
  
  // Configurar el listener de errores para análisis léxico
  const lexerErrorListener = new ErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(lexerErrorListener);
  
  const tokens = new antlr4.CommonTokenStream(lexer);
  
  // 2. Generar tabla de tokens
  const tokenCollector = new TokenCollector(tokens);
  tokens.fill();
  const tokenTable = tokenCollector.collect();
  
  // Chequear errores léxicos
  if (lexerErrorListener.errors.length > 0) {
    return {
      success: false,
      fase: 'léxico',
      errors: lexerErrorListener.errors,
      tokenTable
    };
  }
  
  // 3. Análisis sintáctico
  const parser = new PilaParser(tokens);
  
  // Configurar el listener de errores para análisis sintáctico
  const parserErrorListener = new ErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(parserErrorListener);
  
  // Construir el árbol de análisis
  const tree = parser.programa();
  
  // Chequear errores sintácticos
  if (parserErrorListener.errors.length > 0) {
    return {
      success: false,
      fase: 'sintáctico',
      errors: parserErrorListener.errors,
      tokenTable
    };
  }
  
  // 4. Generar árbol sintáctico en formato texto
  const treeBuilder = new TreeBuilder();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(treeBuilder, tree);
  
  // 5. Interpretación y traducción a JavaScript
  const interpreter = new Interpreter();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(interpreter, tree);
  
  return {
    success: true,
    tokenTable,
    syntaxTree: treeBuilder.tree,
    jsCode: interpreter.jsCode
  };
}

// Función para procesar un archivo
function procesarArchivo(filePath) {
  try {
    const input = fs.readFileSync(filePath, 'utf8');
    const resultado = analizar(input);
    
    console.log('--- Resultado del análisis ---');
    
    if (resultado.success) {
      console.log('✅ Análisis completado exitosamente');
    } else {
      console.log(`❌ Errores encontrados en fase de análisis ${resultado.fase}`);
      console.log('Errores:');
      resultado.errors.forEach(error => {
        console.log(`  Línea ${error.line}, Columna ${error.column}: ${error.message}`);
      });
    }
    
    console.log('\n--- Tabla de Tokens ---');
    console.table(resultado.tokenTable);
    
    if (resultado.success) {
      console.log('\n--- Árbol Sintáctico ---');
      console.log(resultado.syntaxTree);
      
      console.log('\n--- Código JavaScript Generado ---');
      console.log(resultado.jsCode);
    }
    
    return resultado;
  } catch (error) {
    console.error('Error al procesar el archivo:', error);
    return { success: false, error: error.message };
  }
}

// Función para ejecutar el intérprete directamente
function ejecutar(input) {
  const resultado = analizar(input);
  
  if (resultado.success) {
    try {
      // Ejecutar el código JavaScript generado
      console.log('\n--- Ejecución del Código ---');
      eval(resultado.jsCode);
      return true;
    } catch (error) {
      console.error('Error en la ejecución:', error);
      return false;
    }
  } else {
    console.error('No se puede ejecutar debido a errores en el análisis');
    return false;
  }
}

// Exportar las funciones para uso externo
module.exports = {
  analizar,
  procesarArchivo,
  ejecutar
};

// Si se ejecuta directamente como script
if (require.main === module) {
  if (process.argv.length < 3) {
    console.log('Uso: node analizador.js <archivo_entrada>');
    process.exit(1);
  }
  
  const filePath = process.argv[2];
  procesarArchivo(filePath);
}