import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('tasks-clear.withClear', () => {
			const task: vscode.Task = new vscode.Task(
				{ "type": "shell" },
				vscode.TaskScope.Workspace,
				"Task with clear",
				"Source",
				new vscode.ShellExecution('echo 1 && echo 2 && echo 3')
			);
			task.presentationOptions = {
				reveal: vscode.TaskRevealKind.Always,
				panel: vscode.TaskPanelKind.Shared,
				clear: true,
			};
			vscode.tasks.executeTask(task);
		}));
	context.subscriptions.push(
		vscode.commands.registerCommand('tasks-clear.withoutClear', () => {
			const task: vscode.Task = new vscode.Task(
				{ "type": "shell" },
				vscode.TaskScope.Workspace,
				"Task without clear",
				"Source",
				new vscode.ShellExecution('echo 1 && echo 2 && echo 3')
			);
			task.presentationOptions = {
				reveal: vscode.TaskRevealKind.Always,
				panel: vscode.TaskPanelKind.Shared,
				clear: false,
			};
			vscode.tasks.executeTask(task);
		}));
}

export function deactivate() { }
