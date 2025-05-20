const antlr4 = require('antlr4');
const fs = require('fs');
const MiniJavaScriptLexer = require('./MiniJavaScriptLexer').MiniJavaScriptLexer;
const MiniJavaScriptParser = require('./MiniJavaScriptParser').MiniJavaScriptParser;
const CustomVisitor = require('./CustomVisitor').CustomVisitor;

// Leer input.txt
const input = fs.readFileSync('input.txt', 'utf-8');
const chars = new antlr4.InputStream(input);
const lexer = new MiniJavaScriptLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MiniJavaScriptParser(tokens);

// Comenzar desde la regla `program`
const tree = parser.program();

// Interpretar
const visitor = new CustomVisitor();
visitor.visit(tree);
