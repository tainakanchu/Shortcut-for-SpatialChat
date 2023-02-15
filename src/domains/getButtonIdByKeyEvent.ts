import { getKeyMap } from "./getKeyMap";

/**
 * キーイベントをもとに検索対象要素のidを取得する
 *
 * @param event キーボードイベント
 * @returns
 */
export const getButtonClassNameByKeyEvent = (
  event: KeyboardEvent
): string | null => {
  const keyMap = getKeyMap();

  switch (event.key) {
    case keyMap.microphone:
      return "space-tool-bar-microphone__button";
    case keyMap.camera:
      return "space-tool-bar-camera__button";
    case keyMap.mega:
      // TODO: メガホンに特徴的なクラスがないので一旦保留
      return null;
    default:
      return null;
  }
};
