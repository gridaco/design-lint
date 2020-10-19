/**
 * Iterates throught the children, finds the missing constraints. It does not inspect the givven node itself.
 * Again, It inspects the children of the givven node, not the node itself.
 * @param node the target node to be inspected. node should be Group or Frame to be inspected.
 */
export function lintMissingConstraints(node: SceneNode): Lint {
    const containerWidth = node.width
    const containerHeight = node.height


    if (node.type == "FRAME" || node.type == "GROUP" || node.type == "COMPONENT" || node.type == "INSTANCE") {
        node.children.forEach((childNode) => {
            childNode.constrainProportions
            childNode.layoutAlign
            childNode.absoluteTransform
            const relX = childNode.x
            const relXCenter = relX + (childNode.width / 2)
            const relY = childNode.y
            const relYCenter = relY + (childNode.height / 2)

            const lcr = getLCR(containerWidth, relXCenter)


            switch (childNode.type) {
                case "GROUP":
                    // https://github.com/figma/plugin-typings/issues/9
                    break;
                case "INSTANCE" || "COMPONENT":
                    childNode.constraints
                    break;
                case "FRAME":
                    break;
            }
        })
    } else {
        return true
    }
}


type Lint = boolean | LintResult

interface LintResult {
    error: Error
}



const SAFE_MARGIN_PX = 1
type LCR = "L" | "C" | "R"
/**
 * calculate the position element in X plane of givven container
 * 
 * |L--------|
 * 
 * |----C----|
 * 
 * |--------R|
 * 
 * the safe margin in non even numbers of PXs are dampped with @const SAFE_MARGIN_PX
 * @param containerWidth 
 * @param centerPosition 
 */
function getLCR(containerWidth: number, centerPosition: number): LCR {
    const lcr = Math.abs((containerWidth / 2 + SAFE_MARGIN_PX) - centerPosition)
    if (lcr < 0) {
        // this is visually on the left side
        return "L"
    } else if (lcr == 0) {
        // this is visually on the center
        return "C"
    } else if (lcr > 0) {
        // this is visually on the right side
        return "R"
    }
}