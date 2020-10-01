import { naming } from "..";

const goodNamings = [
    "login",
    "title",
    "99",

];
const badNamings = [
    "iPhone XS - 2",
    "Rectangle 3",
    "Copy of text 2"
];



export function test() {
    var successful = [];
    var fail = [];

    goodNamings.forEach((val, i) => {
        try{
            naming(val)
            successful.push(val)
        }catch (e) {
            fail.push(e)
        }
    })
    badNamings.forEach((val, i) => {
        try{
            naming(val)
            successful.push(val)
        }catch (e) {
            fail.push(e)
        }
    })
    return {
        "successful" : successful,
        "fail" : fail
    }
}