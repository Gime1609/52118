grammar pilagrammar;

programa: 'pila' NOMBRE '{' instruccion* '}';

instruccion
    : crear
    | empujar
    ;

crear: 'crear' '(' lista ')' '!';
empujar: 'empujar' '(' NUMERO ')' '!';

lista: '[' (NUMERO (',' NUMERO)*)? ']';

NOMBRE: [a-zA-Z_][a-zA-Z_0-9]*;
NUMERO: [0-9]+;

WS: [ \t\r\n]+ -> skip;