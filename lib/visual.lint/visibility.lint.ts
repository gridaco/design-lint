import { ReflectSceneNode } from "@bridged.xyz/design-sdk/lib/nodes";
import { VisibilityFeedback } from "../feedbacks/visibility.feedback";

export function lintInvisibleNode(target: ReflectSceneNode): VisibilityFeedback {
    // if visibility set to off, or layer opacity is ZERO
    if (!target.visible || target.opacity === 0) {
        return new VisibilityFeedback(target, `node ${target} under ${target.parent} is not visible. is this by design?`);
    }
}