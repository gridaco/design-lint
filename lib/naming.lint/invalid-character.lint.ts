import { ReflectLintFeedback } from "../feedbacks/feedback";
import { InvalidCharacterInNameError } from "../feedbacks/naming.feedback";

/**
 * 
 * @param name the name of element
 */
export default function InvalidCharacterLint(name: string): ReflectLintFeedback {
    // list of invalid characters
    // https://www.urlencoder.io/learn/#:~:text=ASCII%20control%20characters%20(e.g.%20backspace,have%20special%20meaning%20within%20URLs.
    // ! 
    // @
    // +
    // {
    // }
    // |

    if (name.includes("!")) {
        return new InvalidCharacterInNameError(name, "!");
    }
}