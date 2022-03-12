import { ReflectSceneNode } from "@design-sdk/figma-node";
import { ReflectLintFeedback } from "../feedbacks/feedback";
import { InvalidCharacterInNameError } from "../feedbacks/naming.feedback";

/**
 *
 * @param target the name of element
 */
export default function invalidCharacterLint(
  target: ReflectSceneNode
): ReflectLintFeedback {
  // list of invalid characters
  // https://www.urlencoder.io/learn/#:~:text=ASCII%20control%20characters%20(e.g.%20backspace,have%20special%20meaning%20within%20URLs.
  // !
  // @
  // +
  // {
  // }
  // |

  if (target.name.includes("!")) {
    return new InvalidCharacterInNameError(target.copyAsSnippet(), "!");
  }
}
