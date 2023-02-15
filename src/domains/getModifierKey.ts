import { OperatingSystem } from "../types";

/**
 * イベントからOSに応じた修飾キーを取得する
 */
export const getModifierKey = (event: KeyboardEvent, os: OperatingSystem) => {
  if (os.family === "OS X") {
    return event.metaKey;
  } else {
    return event.ctrlKey;
  }
};
