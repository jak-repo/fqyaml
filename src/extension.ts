import * as vscode from 'vscode';
import { exec } from 'child_process'; // Import child_process to run shell commands
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "fqyaml" is now active!');

    const disposable = vscode.commands.registerCommand('fqyaml.getPath', () => {
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const selectedText = document.getText(selection).trim();

            if (selectedText) {
                // Get the full document text
                const fullText = document.getText();
                
                // Save fullText to a temporary file for yq to process
                const tempFilePath = path.join(os.tmpdir(), 'temp.yaml');
                fs.writeFileSync(tempFilePath, fullText);

                // Adjust the yq command for proper syntax
                const yqCommand = `yq eval '... | select(. == "${selectedText}") | path | join(".")' ${tempFilePath}`;
                exec(yqCommand, (error, stdout, stderr) => {
                    if (error || stderr) {
                        console.error(`Error executing yq: ${stderr}`);
                        vscode.window.showErrorMessage(stderr);
                        return;
                    }
                    const path = stdout.trim();
                    if (path) {
                        vscode.env.clipboard.writeText(path).then(() => {
                            vscode.window.showInformationMessage(`Path: ${path}`).then(() => {
                                setTimeout(() => {
                                    vscode.commands.executeCommand('workbench.action.closeMessages'); // Closes the notification
                                }, 2000); // Notification stays for 2 seconds
                            });
                        });
                    } else {
                        vscode.window.showInformationMessage('Could not determine the path for the selected text.');
                    }
                });
            } else {
                vscode.window.showInformationMessage('No text selected!');
            }
        } else {
            vscode.window.showInformationMessage('Hello World from fqyaml!');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
