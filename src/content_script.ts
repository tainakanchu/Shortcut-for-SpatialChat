import { getButonClassNameByKeyEvent } from "./domains";

/**
 * 画面起動時に実行されるハンドラ
 */
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey) {
    const id = getButonClassNameByKeyEvent(event);
    if (id) {
      const element = document.getElementsByClassName(id)[0] as HTMLElement;
      if (element) {
        element.click();
        event.preventDefault();
      }
    }
  }
});
