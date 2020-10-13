import {FigmaDefaultNameInNameError, InvalidCharacterInNameError} from "../feedbacks/assert";

export const defaultShapeName = [
    "Rectangle",
    "Line",
    "Polygon",
    "Star",
    "Arrow",
    "icon",

]
export const defaultFrameName = [
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

    "A4",
    "A5",
    "A6",
    "Letter",
    "Tabloid",

    "Twitter Post",
    "Twitter Header",

    //TODO:: ADD ECT
]
export default function DefaultNameLint(name) {
    defaultFrameName.map(
        s => {
            var regExp = "^"+ s + " - " + "[0-9]*$"
            if(name.match(RegExp(regExp)))
                throw new FigmaDefaultNameInNameError(name);
        }
    )
    defaultShapeName.map(
        s => {
            var regExp = "^"+ s +" " + "[0-9]*$"
            if(name.match(RegExp(regExp)))
                throw new FigmaDefaultNameInNameError(name);
        }
    )
}