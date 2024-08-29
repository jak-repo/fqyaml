# FQYaml - Find Full YAML Path

## Overview

FQYaml is a Visual Studio Code extension designed to help users easily find and copy the full path of a selected key or value within a YAML file. This extension is particularly useful for navigating large, nested YAML files and extracting the path in dot notation for further use.

## Features

- **Find Full Path**: Select a key or value in a YAML file, and this extension will generate the full path in dot notation.
- **Copy to Clipboard**: The generated path is automatically copied to the clipboard for easy pasting into other files or applications.
- **Notification**: A temporary notification displays the path, confirming it has been copied.

## Installation

1. Clone the repository or download the `.vsix` file.
2. Open Visual Studio Code.
3. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar or by pressing `Ctrl+Shift+X`.
4. Click on the three-dot menu icon in the upper right corner of the Extensions view.
5. Select **Install from VSIX...** from the dropdown menu.
6. Browse to the location of the `.vsix` file, select it, and click **Install**.

## Usage

1. Open a YAML file in VS Code.
2. Highlight a key or value whose path you want to find.
3. Right-click and select **"Find Full YAML Path"** from the context menu or use the keyboard shortcut `Ctrl+Shift+H`.
4. The full path will be displayed in a temporary notification and copied to your clipboard.

## Requirements

- [yq](https://github.com/mikefarah/yq): Ensure `yq` is installed on your system for the extension to work correctly. Installation instructions for `yq` can be found on the [yq GitHub page](https://github.com/mikefarah/yq).

## Configuration

This extension does not currently support additional configuration settings. However, it leverages the system's `yq` installation, so ensure that `yq` is available in your system's PATH.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions, including bug fixes, feature requests, and improvements to the existing code.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For any questions or feedback, please open an issue on the [GitHub repository](https://github.com/yourusername/fqyaml/issues).

