import { InvalidCharacterInNameError } from "../feedbacks/assert";

/**
 * 
 * @param name the name of element
 */
export default function (name: string) {
    // list of invalid characters
    // https://www.urlencoder.io/learn/#:~:text=ASCII%20control%20characters%20(e.g.%20backspace,have%20special%20meaning%20within%20URLs.
    // ! 
    // @
    // +
    // {
    // }
    // |

    if (name.includes("!")) {
        throw new InvalidCharacterInNameError(name, "!");
    }
}