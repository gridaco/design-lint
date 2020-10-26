import { ReflectTextNode } from "@bridged.xyz/design-sdk/lib/nodes";
import { ReflectLintFeedback } from "../feedbacks";
import { MissingTextStyleWarning } from "../feedbacks/text-style.feedback";

export function lintMissingTextStyle(node: ReflectTextNode): ReflectLintFeedback {
    if (!node.hasTextStyle) {
        return new MissingTextStyleWarning(node.copyAsSnippet(),)
    }
    return undefined
}