import { ReflectSceneNode } from "@design-sdk/figma-node";
import { ReflectLintFeedback } from "../feedbacks/feedback";
import { DefaultNameUsageWarning } from "../feedbacks/naming.feedback";

export const DEFAULT_SHAPE_NAME_PATTERNS = [
  //#region  figma's default node naming (sorted alphabetically)
  "Arrow",
  "Ellipse",
  "Frame",
  "Group",
  "Line",
  "Polygon",
  "Rectangle",
  "Star",
  "Vector",
  //#endregion
];
export const DEFAULT_SCREEN_NAME_PATTERNS = [
  //#region  figma's screen frame default naming
  "iPhone 11 Pro / X",
  "iPhone 11 Pro Max",
  "iPhone 11 Pro",
  "iPhone 11",
  "iPhone 13 Pro Max",
  "iPhone 13 / 13 Pro",
  "iPhone 13 mini",
  "iPhone SE",
  "iPhone 8",
  "iPhone 8 Plus",
  "iPhone SE",
  "Google Pixel 2",
  "Google Pixel 2 XL",
  "Android",
  "Android Small",
  "Android Large",
  "Google Pixel 2",
  "Google Pixel 2 XL",

  // tablet
  "iPad mini",
  "iPad mini 8.3",
  "iPad Pro 11",
  'iPad Pro 11"',
  "iPad Pro 12.9",
  'iPad Pro 12.9"',
  "Surface Pro 3",
  "Surface Pro 4",
  "Surface Pro 8",

  // desktop
  "Desktop",
  "Macbook",
  'MacBook Pro 14"',
  'MacBook Pro 16"',
  "Macbook Pro",
  "Surface Book",
  "iMac",

  // slide
  "Slide 16:9",
  "Slide 4:3",

  // watch
  "Apple Watch 38mm",
  "Apple Watch 40mm",
  "Apple Watch 41mm",
  "Apple Watch 42mm",
  "Apple Watch 44mm",
  "Apple Watch 45mm",

  //#region paper
  "A4",
  "A5",
  "A6",
  "Letter",
  "Tabloid",
  //#endregion

  // Social media
  "Twitter Post",
  "Twitter post",
  "Twitter Header",
  "Twitter header",
  "Facebook post",
  "Facebook cover",
  "Instagram post",
  "Instagram story",
  "LinkedIn cover",
  //#endregion
];

const DEFAULT_NAME_PATTERNS = [
  ...DEFAULT_SHAPE_NAME_PATTERNS,
  ...DEFAULT_SCREEN_NAME_PATTERNS,
];

/**
 *
 * @example
 * - "Rect" - no warn
 * - "Rect - 1" - warn
 * - "Frame" - no warn
 * - "Frame - 1" warn
 * - "iPhone" - warn
 * - "iPhone - 1" - warn
 * @param target the name of the node
 */
export default function lintDefaultNameUsage(
  target: ReflectSceneNode
): ReflectLintFeedback {
  for (const pattern of DEFAULT_NAME_PATTERNS) {
    // ( | - ) means " " or " - "
    var regExp = "^" + pattern + "( | - )" + "[0-9]*$";
    if (target.name.match(RegExp(regExp)))
      return new DefaultNameUsageWarning(target.copyAsSnippet());
  }
}
