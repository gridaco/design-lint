import { getgroups } from "process"
import { LintResults, ReflectLintFeedback } from "../feedbacks/feedback"
import { MissingConstraintsWarning } from "../feedbacks/constraints.feedback"

/**
 * Iterates throught the children, finds the missing constraints. It does not inspect the givven node itself.
 * Again, It inspects the children of the givven node, not the node itself.
 * @param node the target node to be inspected. node should be Group or Frame to be inspected.
 */
export function lintMissingConstraints(node: SceneNode): LintResults {
    const lints: Array<ReflectLintFeedback> = []

    const containerWidth = node.width
    const containerHeight = node.height

    if (node.type == "FRAME" || node.type == "GROUP" || node.type == "COMPONENT" || node.type == "INSTANCE") {

        for (const childNode of node.children) {
            const validTarget = childNode.visible && !childNode.locked
            if (validTarget) {

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
                    const xAlign: LCRS = getNodeLCRS(childNode);

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

function getRelX(node: SceneNode) {
    if (node.parent.type == "GROUP") {

    }
    node.x
}

function getRelY(node: SceneNode) {

}

function getNodeLCRS(node: SceneNode): LCRS {
    if (node.type == "INSTANCE" || node.type == "COMPONENT" || node.type == "FRAME" || node.type == "RECTANGLE") {
        return X_ALIGN_FIGMA_TO_REFLECT.get(node.constraints.horizontal)
    } else if (node.type == "GROUP") {
        return getGroupLCRS(node);
    }
}

/**
 * check group's constraint
 * https://github.com/figma/plugin-typings/issues/9
 * @param node 
 */
function getGroupLCRS(node: SceneNode): LCRS {
    let lastLCRS: LCRS;
    if (node.type == "GROUP") {
        for (const c of node.children) {
            const lcrs = getGroupLCRS(c)
            if (lastLCRS) {
                if (lastLCRS === lcrs) {
                    // do nothing if lcrs matches
                } else {
                    // return mixed, if last lcrs does not match current one.
                    return "Mixed"
                }
            } else {
                lastLCRS = lcrs
            }
        }
        return lastLCRS
    } else {
        return getNodeLCRS(node)
    }
}

const X_ALIGN_FIGMA_TO_REFLECT: Map<ConstraintType, LCRS> = new Map([
    ["MIN", "Left"],
    ["MAX", "Right"],
    ["CENTER", "Center"],
    ["STRETCH", "Stretch"],
    ["SCALE", "Scale"]
])




type Lint = boolean | LintResult

interface LintResult {
    error: Error
}



const SAFE_DAMPING_PX = 0.5
type LCRS = "Left" | "Center" | "Right" | "Stretch" | "Scale" | "Mixed"
/**
 * calculate the position element in X plane of givven container
 * 
 * |L--------|
 * 
 * |----C----|
 * 
 * |--------R|
 * 
 * the safe margin in non even numbers of PXs are dampped with @const SAFE_DAMPING_PX
 * @param containerWidth 
 * @param centerPosition 
 */
function getLCRS(args: {
    containerWidth: number, centerPosition: number, startPosition: number, width: number
}): LCRS {
    const { containerWidth, centerPosition, startPosition, width } = args

    // stretch inspection
    // if the size of child is same as parent, and start point is starting from 0, inspect it as "Stretch"
    if (containerWidth == width && startPosition == 0) {
        return "Stretch"
    }



    const isContainerWidthEven = containerWidth % 2 == 0
    const isCenterPositionEven = centerPosition % 2 == 0

    /** if one of the givven parameter is not a even number, than apply damping rule with @const SAFE_DAMPING_PX */
    const damp = isContainerWidthEven && isCenterPositionEven ? 0 : SAFE_DAMPING_PX

    const centerDiff = Math.abs((containerWidth / 2) - centerPosition)
    if (centerDiff + damp < 0) {
        // this is visually on the left side
        return "Left"
    } else if (centerDiff - damp > 0) {
        // this is visually on the right side
        return "Right"
    }
    // this is visually on the center
    return "Center"
}