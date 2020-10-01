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
export default function DefaultNameLint(name) {
    defaultFrameName.map(
        s => {
            if(name.match(name.match(s)))
                throw new FigmaDefaultNameInNameError(name);
        }
    )
    defaultShapeName.map(
        s => {
            if(name.match(name.match(s)))
                throw new FigmaDefaultNameInNameError(name);
        }
    )
}