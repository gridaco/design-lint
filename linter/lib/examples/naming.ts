import { naming } from "..";

const goodNamings = [];
const badNamings = [
    "iPhone XS - 2",
    "Rectangle 3",
    "Copy of text 2"
];



export function test() {
    badNamings.forEach((val, i) => {
        naming(val)
    })
}