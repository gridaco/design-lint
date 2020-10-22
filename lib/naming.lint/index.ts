import InvalidCharacterLint from "./invalid-character.lint";
import lintDefaultNameUsage from "./default-name.lint";
import { ReflectLintFeedback } from "../feedbacks/feedback";
import { ReflectSceneNode } from "@bridged.xyz/design-sdk/lib/nodes";


export default function (target: ReflectSceneNode): Array<ReflectLintFeedback> {
    // run linting by priority
    const feedbacks: Array<ReflectLintFeedback> = []
    feedbacks.push(InvalidCharacterLint(target))
    feedbacks.push(lintDefaultNameUsage(target))
    return feedbacks.filter((i) => { return i !== undefined })
}