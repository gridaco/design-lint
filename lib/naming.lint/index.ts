import InvalidCharacterLint from "./invalid-character.lint";
import lintDefaultNameUsage from "./default-name.lint";
import { ReflectLintFeedback } from "../feedbacks/feedback";


export default function (name: string, context?): Array<ReflectLintFeedback> {
    // run linting by priority
    const feedbacks: Array<ReflectLintFeedback> = []
    feedbacks.push(InvalidCharacterLint(name))
    feedbacks.push(lintDefaultNameUsage(name))
    return feedbacks.filter((i) => { return i !== undefined })
}