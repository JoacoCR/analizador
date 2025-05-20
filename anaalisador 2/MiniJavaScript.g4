grammar MiniJavaScript;

// Reglas del parser
program: statement* EOF;

statement
    : doWhileStatement
    | assignmentStatement
    | consoleStatement
    ;

doWhileStatement
    : 'do' block 'while' '(' expression ')' ';'
    ;

assignmentStatement
    : Identifier '=' expression ';'
    ;

consoleStatement
    : 'console' '.' 'log' '(' expression ')' ';'
    ;

block: '{' statement* '}';

expression
    : term (('+' | '-' | '*' | '/') term)*
    ;

term
    : Identifier
    | Number
    | '(' expression ')'
    ;

// Reglas del lexer
Identifier: [a-zA-Z_] [a-zA-Z_0-9]*;
Number: [0-9]+;

WS: [ \t\r\n]+ -> skip;
