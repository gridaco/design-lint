import InvalidCharacterLint from "./invalid-character.lint";
import DefaultNameLint from "./default-name.lint";

export default function (name, context?) {
    // run linting by priority
    InvalidCharacterLint(name)
    DefaultNameLint(name)

}