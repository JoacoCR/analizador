const MiniJavaScriptVisitor = require('./MiniJavaScriptVisitor').MiniJavaScriptVisitor;

class CustomVisitor extends MiniJavaScriptVisitor {
    constructor() {
        super();
        this.variables = {};
    }

    visitAssignmentStatement(ctx) {
        const id = ctx.Identifier().getText();
        const value = this.visit(ctx.expression());
        this.variables[id] = value;
        return value;
    }

    visitConsoleStatement(ctx) {
        const value = this.visit(ctx.expression());
        console.log(value);
        return value;
    }

    visitExpression(ctx) {
        if (ctx.children.length === 1) {
            return this.visit(ctx.getChild(0));
        }

        let result = this.visit(ctx.getChild(0));
        for (let i = 1; i < ctx.children.length; i += 2) {
            const op = ctx.getChild(i).getText();
            const right = this.visit(ctx.getChild(i + 1));
            if (op === '+') result += right;
            else if (op === '-') result -= right;
            else if (op === '*') result *= right;
            else if (op === '/') result /= right;
        }
        return result;
    }

    visitTerm(ctx) {
        if (ctx.Number()) return parseInt(ctx.Number().getText());
        if (ctx.Identifier()) return this.variables[ctx.Identifier().getText()] || 0;
        if (ctx.expression()) return this.visit(ctx.expression());
    }

    visitDoWhileStatement(ctx) {
        do {
            this.visit(ctx.block());
        } while (this.visit(ctx.expression()));
    }

    visitBlock(ctx) {
        for (let stmt of ctx.statement()) {
            this.visit(stmt);
        }
    }
}

exports.CustomVisitor = CustomVisitor;
