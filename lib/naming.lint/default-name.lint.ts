import { ReflectLintFeedback } from "../feedbacks/feedback";
import { DefaultNameUsageWarning, InvalidCharacterInNameError } from "../feedbacks/naming.feedback";

export const DEFAULT_SHAPE_NAME_PATTERNS = [
    "Rectangle",
    "Line",
    "Polygon",
    "Star",
    "Arrow",
    "icon",
    "Frame",
]
export const DEFAULT_SCREEN_NAME_PATTERNS = [

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
]

const DEFAULT_NAME_PATTERNS = [...DEFAULT_SHAPE_NAME_PATTERNS, ...DEFAULT_SCREEN_NAME_PATTERNS]

/**
 * "Rect" - no warn
 * "Rect - 1" - warn
 * "Frame" - no warn
 * "Frame - 1" warn
 * "iPhone" - warn
 * "iPhone - 1" - warn
 * @param name the name of the node
 */
export default function lintDefaultNameUsage(name: string): ReflectLintFeedback {
    for (const pattern of DEFAULT_NAME_PATTERNS) {
        // TODO - this regex cannot check for various logic for screen naming.
        var regExp = "^" + pattern + " - " + "[0-9]*$"
        if (name.match(RegExp(regExp)))
            return new DefaultNameUsageWarning(name);
    }
}