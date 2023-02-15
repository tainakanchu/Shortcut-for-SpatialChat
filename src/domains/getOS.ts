import platform from "platform";
import { OperatingSystem, OSFamily, OSFamilyType } from "../types";

/**
 * OperationSystem オブジェクトを取得する
 */
export const getOS = (): OperatingSystem | null => {
  const os = platform.os;
  if (!os) return null;

  const family = os.family;

  if (family && OSFamilyType.includes(family as OSFamily)) {
    return os as OperatingSystem;
  } else return null;
};
