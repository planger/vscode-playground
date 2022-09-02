"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let hiddenTerminal;
    context.subscriptions.push(vscode.commands.registerCommand('terminal-creation-options.createDefault', () => {
        const terminal = vscode.window.createTerminal("Default Terminal");
        terminal.sendText("echo " + JSON.stringify(terminal.creationOptions), true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminal-creation-options.createHiddenTerminal', () => {
        hiddenTerminal = vscode.window.createTerminal({
            name: "Terminal 1 (hidden)",
            hideFromUser: true,
        });
        hiddenTerminal.sendText("echo " + JSON.stringify(hiddenTerminal.creationOptions), true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('terminal-creation-options.showHiddenTerminal', () => {
        if (hiddenTerminal === undefined) {
            console.log('Hidden terminal has not been created yet');
            return;
        }
        hiddenTerminal.show();
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