import { naming } from "../dist";

const goodNamings = [
    "login",
    "title",
    "99",

];
const badNamings = [
    "iPhone 11 - 2",
    "iPhone 11 Pro - 11",
    "Rectangle 3",
    "icon 2",
    "iPhone SE - 121421",
];



export function test() {
    var successful = [];
    var fail = [];

    goodNamings.forEach((val, i) => {
        try {
            naming(val)
            successful.push(val)
        } catch (e) {
            fail.push(e)
        }
    })
    badNamings.forEach((val, i) => {
        try {
            naming(val)
            successful.push(val)
        } catch (e) {
            fail.push(e)
        }
    })
    return {
        "successful": successful,
        "fail": fail
    }
}