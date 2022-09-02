"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('terminal-creation-options.createDefault', () => {
        const terminal = vscode.window.createTerminal({
            name: "Normal Env Terminal",
            env: {
                hello: "world"
            }
        });
        terminal.sendText("echo " + JSON.stringify(terminal.creationOptions), true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminal-creation-options.createStrictEnvTerminal', () => {
        const terminal = vscode.window.createTerminal({
            name: "Strict Env Terminal",
            strictEnv: true,
            env: {
                hello: "world"
            }
        });
        terminal.sendText("echo " + JSON.stringify(terminal.creationOptions), true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminal-creation-options.print', () => {
        for (var terminal of vscode.window.terminals) {
            console.log(JSON.stringify(terminal.creationOptions));
        }
    }));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map