import { getButtonClassNameByKeyEvent, getOS, getModifierKey } from "./domains";

/**
 * 画面起動時に実行されるハンドラ
 */
document.addEventListener("keydown", (event) => {
  const os = getOS();
  if (!os) return;

  // OSに応じた修飾キーを取得する
  const modifierKey = getModifierKey(event, os);

  if (modifierKey) {
    const id = getButtonClassNameByKeyEvent(event);
    if (id) {
      const element = document.getElementsByClassName(id)[0] as HTMLElement;
      if (element) {
        element.click();
        event.preventDefault();
      }
    }
  }
});
