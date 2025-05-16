grammar PilaGrammar;

// Parser rules
programa : 'pila' NOMBRE '{' comandos '}' ;
comandos : (operacion)* ;
operacion : push | pop | peek | crear ;
crear : 'crear' '(' lista ')' '!' ;
push : 'empujar' '(' valor ')' '!' ;
pop : 'sacar' '(' ')' '!' ;
peek : 'mirar' '(' ')' '!' ;
valor : NUMERO | TEXTO ;
lista : '[' (valor (',' valor)*)? ']' ;

// Lexer rules
NOMBRE : [a-zA-Z]+ ;
NUMERO : [0-9]+ ;
TEXTO : '"' (~["])* '"' ;
WS : [ \t\r\n]+ -> skip ;
COMMENT : '#' .*? '\r'? '\n' -> skip ;