import type { IReflectNodeReference } from "@design-sdk/figma-node";
import { ReflectLintFeedback } from "./feedback";

/**
 * @example the node "Group 1" is a group layer (containing 3 layers), which can cause unexpected layout constraints of the children. consider using a frame instead.
 */
export class AvoidUsingGroupFeedback extends ReflectLintFeedback {
  constructor(target: IReflectNodeReference) {
    super(
      target,
      `the node "${target.name}" is a group layer (containing ${
        target.children?.length ?? 0
      } layers), which can cause unexpected layout constraints of the children. consider using a frame instead`,
      "warning"
    );
  }
}
