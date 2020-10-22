import { LintResults, ReflectLintFeedback } from "../feedbacks/feedback"
import { MissingConstraintsWarning } from "../feedbacks/constraints.feedback"
import { ReflectConstraintMixin, ReflectChildrenMixin } from "@bridged.xyz/design-sdk/lib/nodes"
import { LCRS } from "@bridged.xyz/design-sdk/lib/utils/lcrs"


type Lint = boolean | LintResult

interface LintResult {
    error: Error
}


/**
 * Iterates throught the children, finds the missing constraints. It does not inspect the givven node itself.
 * Again, It inspects the children of the givven node, not the node itself.
 * @param node the target node to be inspected. node should be Group or Frame to be inspected.
 */
export function lintMissingConstraints(node: ReflectConstraintMixin): LintResults {
    const lints: Array<ReflectLintFeedback> = []

    if (node instanceof ReflectChildrenMixin) {
        for (const childNode of node.children) {
            const validTarget = childNode.visible && !childNode.locked
            if (validTarget) {

                const lcr = childNode.relativeLcrs

                // INSTANCE, COMPONENT, FRAME are supported. GROUP support is blocked by https://github.com/figma/plugin-typings/issues/9
                if (childNode.type == "INSTANCE" || childNode.type == "COMPONENT" || childNode.type == "FRAME" || childNode.type == "RECTANGLE" || childNode.type == "GROUP") {
                    const xAlign: LCRS = node.lcrs
                    const target = childNode.copyAsSnippet()
                    const parent = node.copyAsSnippet()
                    console.warn(node.name, xAlign)
                    switch (lcr) {
                        case "Left":
                            if (!(xAlign == "Left")) {
                                const warn = new MissingConstraintsWarning(target, parent, lcr, xAlign, lcr)
                                lints.push(warn)
                            }
                            break;
                        case "Right":
                            if (!(xAlign == "Right")) {
                                const warn = new MissingConstraintsWarning(target, parent, lcr, xAlign, lcr)
                                lints.push(warn)
                            }
                            break;
                        case "Center":
                            if (!(xAlign == "Center" || xAlign == "Stretch")) {
                                const warn = new MissingConstraintsWarning(target, parent, lcr, xAlign, `Stretch or Center`)
                                lints.push(warn)
                            }
                            break;
                        case "Stretch":
                            if (!(xAlign == "Center" || xAlign == "Stretch" || xAlign == "Scale")) {
                                const warn = new MissingConstraintsWarning(target, parent, lcr, xAlign, `Stretch, Center, or Scale`)
                                lints.push(warn)
                            }
                    }
                }
            }
        }
        return lints
    } else {
        return true
    }
}
