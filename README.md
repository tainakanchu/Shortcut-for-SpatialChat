# Shortcut for SpatialChat

This extension provides several shortcut key operations on the SpatialChat screen.
The currently implemented shortcut keys are

| Key bind | Function                 |
| :------- | :----------------------- |
| Ctrl + d | Mute / Unmute microphone |
| Ctrl + e | Hide / Show camera       |

The key bindings were inspired by those used in Google meet.
Currently, the ability to edit this setting on the user side is not implemented.

## How to use

At this time, installation requires that the browser be configured to enable developer features and be able to install extensions from local file (not from chrome web store).
Please Google how to set up the activation of developer mode.

1. Select newest success build workflow from [actions](https://github.com/tainakanchu/Shortcut-for-SpatialChat/actions).
2. Download "Shortcut for SpatialChat.zip" from "Artifact" at the bottom of the page.
3. Extract the archive.
4. Import the artifacts as extension.

## How to build
1. Clone this repository
2. Do `yarn install` and `yarn build`
3. `dist` folder is created, and it can be imported for chrome.
