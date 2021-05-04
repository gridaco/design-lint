import { ReflectSceneNode } from "@design-sdk/core/nodes";
import { ReflectLintFeedback } from "../feedbacks/feedback";
import { DefaultNameUsageWarning } from "../feedbacks/naming.feedback";

export const DEFAULT_SHAPE_NAME_PATTERNS = [
  //#region  figma's default node naming
  "Rectangle",
  "Line",
  "Polygon",
  "Star",
  "Arrow",
  "icon",
  "Frame",
  "Group",
  //#endregion
];
export const DEFAULT_SCREEN_NAME_PATTERNS = [
  //#region  figma's screen frame default naming
  "iPhone 11 Pro Max",
  "iPhone 11 Pro",
  "iPhone 11",
  "iPhone SE",
  "iPhone 8",
  "Google Pixel 2",
  "Google Pixel 2 XL",
  "Android",

  "iPad mini",
  "iPad Pro 11",
  "iPad Pro 12.9",
  "Surface Pro 3",
  "Surface Pro 4",

  "Desktop",
  "Macbook",
  "Macbook Pro",
  "Surface Book",
  "iMac",

  "Apple Watch 44mm",
  "Apple Watch 42mm",
  "Apple Watch 40mm",
  "Apple Watch 38mm",

  //#region paper
  "A4",
  "A5",
  "A6",
  "Letter",
  "Tabloid",
  //#endregion

  "Twitter Post",
  "Twitter Header",

  //TODO:: Add more

  //#endregion
];

const DEFAULT_NAME_PATTERNS = [
  ...DEFAULT_SHAPE_NAME_PATTERNS,
  ...DEFAULT_SCREEN_NAME_PATTERNS,
];

/**
 * "Rect" - no warn
 * "Rect - 1" - warn
 * "Frame" - no warn
 * "Frame - 1" warn
 * "iPhone" - warn
 * "iPhone - 1" - warn
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
