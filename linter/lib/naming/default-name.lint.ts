import {FigmaDefaultNameInNameError, InvalidCharacterInNameError} from "../feedbacks/assert";

export const defaultShapeName = [
    "Rectangle",
    "Line",
    "Polygon",
    "Star",
    "Arrow",
    "icon"
]
export const defaultFrameName = [
    "iPhone 11 Pro Max",
    "iPhone 11 Pro",
    "iPhone SE",
    "iPhone 8",
    "Google Pixel 2",
    "Android",
    "Desktop"
]
export default function (name) {
    defaultFrameName.map(
        s => {
            name.match(RegExp(s))
            throw new FigmaDefaultNameInNameError(name, name);
        }
    )
}