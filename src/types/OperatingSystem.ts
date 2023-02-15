import { os } from "platform";

/**
 * OSの種類
 */
export type OperatingSystem = Exclude<typeof os, undefined> & {
  family?: OSFamily | undefined;
};

/**
 * os.family として可能性のあるリスト
 */
export const OSFamilyType = [
  "Windows",
  "Windows Server 2008 R2 / 7",
  "Windows Server 2008 / Vista",
  "Windows XP",
  "OS X",
  "Linux",
  "Ubuntu",
  "Debian",
  "Fedora",
  "Red Hat",
  "SuSE",
  "Android",
  "iOS",
  "Windows Phone",
] as const;

/**
 * family として帰ってくる可能性がある値 platform の types 側で定義されていないので独自に定義
 */
export type OSFamily = (typeof OSFamilyType)[number];
