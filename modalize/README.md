<div align="center">
  <h1>React Native Modalize</h1>
</div>

## Used Libraries

- [react-native-modalize](https://github.com/jeremybarbet/react-native-modalize)
- [react-native-webview](https://github.com/react-native-community/react-native-webview)
- [react-native-autoheight-webview](https://github.com/iou90/react-native-autoheight-webview)


## Important Notes
1. For smooth transition, write this code in **`index.js`**

```javascript
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));
```
2. [react-native-autoheight-webview](https://github.com/iou90/react-native-autoheight-webview) sets proper height according to content.

## Run

```bash
$ git clone https://github.com/PabonSEC/Learn-React-Native.git
$ cd Learn-React-Native/modalize
$ npm i
$ react-native run-android
```
