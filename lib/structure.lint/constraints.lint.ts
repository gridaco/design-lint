import { LintResults, ReflectLintFeedback } from "../feedbacks/feedback"
import { MissingConstraintsWarning } from "../feedbacks/constraints.feedback"
import { ReflectSceneNode } from "@bridged.xyz/design-sdk/lib/nodes"
import { getLCRS, LCRS } from "@bridged.xyz/design-sdk/lib/utils/lcrs"


type Lint = boolean | LintResult

interface LintResult {
    error: Error
}


/**
 * Iterates throught the children, finds the missing constraints. It does not inspect the givven node itself.
 * Again, It inspects the children of the givven node, not the node itself.
 * @param node the target node to be inspected. node should be Group or Frame to be inspected.
 */
export function lintMissingConstraints(node: ReflectSceneNode): LintResults {
    const lints: Array<ReflectLintFeedback> = []

    const containerWidth = node.width
    const containerHeight = node.height

    if (node.type == "FRAME" || node.type == "GROUP" || node.type == "COMPONENT" || node.type == "INSTANCE") {

        for (const childNode of node.children) {
            const validTarget = childNode.visible && !childNode.locked
            if (validTarget) {

                // FIXME rel does not work with group as expected.
                const relX = childNode.x
                const relXCenter = relX + (childNode.width / 2)
                const relY = childNode.y
                const relYCenter = relY + (childNode.height / 2)

                const lcr = getLCRS({
                    centerPosition: relXCenter,
                    startPosition: childNode.x,
                    containerWidth: containerWidth,
                    width: childNode.width
                })

                // INSTANCE, COMPONENT, FRAME are supported. GROUP support is blocked by https://github.com/figma/plugin-typings/issues/9
                if (childNode.type == "INSTANCE" || childNode.type == "COMPONENT" || childNode.type == "FRAME" || childNode.type == "RECTANGLE" || childNode.type == "GROUP") {
                    const xAlign: LCRS = node.lcrs

                    console.warn(node.name, xAlign)
                    switch (lcr) {
                        case "Left":
                            if (!(xAlign == "Left")) {
                                const warn = new MissingConstraintsWarning(childNode.name, node.name, lcr, xAlign, lcr)
                                lints.push(warn)
                            }
                            break;
                        case "Right":
                            if (!(xAlign == "Right")) {
                                const warn = new MissingConstraintsWarning(childNode.name, node.name, lcr, xAlign, lcr)
                                lints.push(warn)
                            }
                            break;
                        case "Center":
                            if (!(xAlign == "Center" || xAlign == "Stretch")) {
                                const warn = new MissingConstraintsWarning(childNode.name, node.name, lcr, xAlign, `Stretch or Center`)
                                lints.push(warn)
                            }
                            break;
                        case "Stretch":
                            if (!(xAlign == "Center" || xAlign == "Stretch" || xAlign == "Scale")) {
                                const warn = new MissingConstraintsWarning(childNode.name, node.name, lcr, xAlign, `Stretch, Center, or Scale`)
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
