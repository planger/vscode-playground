import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('terminal-creation-options.createName', () => {
			const terminal = vscode.window.createTerminal("Terminal 0");
			terminal.show(false);
			terminal.sendText(JSON.stringify(terminal.creationOptions), false);
		}));
	context.subscriptions.push(
		vscode.commands.registerCommand('terminal-creation-options.createTerminalOptions', () => {
			const terminalOptions: vscode.TerminalOptions = {
				name: "Terminal 1",
				isTransient: true,
				env: {
					// eslint-disable-next-line @typescript-eslint/naming-convention
					ENV1: "env one"
				}
			};
			const terminal = vscode.window.createTerminal(terminalOptions);
			terminal.show(false);
			terminal.sendText(JSON.stringify(terminal.creationOptions), false);
		}));
	context.subscriptions.push(
		vscode.commands.registerCommand('terminal-creation-options.createExtensionTerminalOptions', () => {

			const writeEmitter = new vscode.EventEmitter<string>();
			const pty: vscode.Pseudoterminal = {
				onDidWrite: writeEmitter.event,
				open: () => { },
				close: () => { },
				handleInput: data => writeEmitter.fire(data === '\r' ? '\r\n' : data)
			};
			writeEmitter.event((e: string) => console.log(e));
			const terminalOptions: vscode.ExtensionTerminalOptions = {
				name: "Terminal 2",
				isTransient: true,
				pty

			};
			const terminal = vscode.window.createTerminal(terminalOptions);
			terminal.show(false);
			writeEmitter.fire(JSON.stringify(terminal.creationOptions));
			// terminal.sendText(JSON.stringify(terminal.creationOptions), false);
		}));
	context.subscriptions.push(
		vscode.commands.registerCommand('terminal-creation-options.print', () => {
			for (var terminal of vscode.window.terminals) {
				console.log(JSON.stringify(terminal.creationOptions));
			}
		}));
}

export function deactivate() { }
