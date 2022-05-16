import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('text-editor-show-hide.show', () => {
			vscode.window.activeTextEditor?.show(vscode.ViewColumn.Beside);
		}));
	context.subscriptions.push(
		vscode.commands.registerCommand('text-editor-show-hide.showOne', () => {
			vscode.window.activeTextEditor?.show(vscode.ViewColumn.One);
		}));
	context.subscriptions.push(
		vscode.commands.registerCommand('text-editor-show-hide.showTwo', () => {
			vscode.window.activeTextEditor?.show(vscode.ViewColumn.Two);
		}));
	context.subscriptions.push(
		vscode.commands.registerCommand('text-editor-show-hide.showThree', () => {
			vscode.window.activeTextEditor?.show(vscode.ViewColumn.Three);
		}));
	context.subscriptions.push(
		vscode.commands.registerCommand('text-editor-show-hide.hide', () => {
			vscode.window.activeTextEditor?.hide();
		}));
}

export function deactivate() { }
