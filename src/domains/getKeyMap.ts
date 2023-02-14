import { KeyMap } from "../types";

/**
 * デフォルトのショートカットキーのマップ
 * google meets のショートカットキーに寄せてる
 */
const defaultKeyMap: KeyMap = {
  microphone: "d",
  camera: "e",
  mega: "m",
};

/**
 * キーマップを取得する
 */
export const getKeyMap = (): KeyMap => {
  return defaultKeyMap;
};
