import { ReflectSceneNode } from "@design-sdk/figma-node";
import { Invalid, ReflectValidation, Valid } from "../../feedbacks/validation";

export function vaidateLintableNodeSize(
  node: ReflectSceneNode
): ReflectValidation {
  if (node.width > 3000) {
    return new Invalid(`node "${node.name}" too big for running linter on.`);
  }
  return new Valid(
    `node "${node.name}" is in valid size range to run linter on.`
  );
}
