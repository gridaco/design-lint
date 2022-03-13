import type { IReflectNodeReference } from "@design-sdk/core";
import { AvoidUsingGroupFeedback } from "../feedbacks/avoid-using-group.feedback";

export function lintGroupUsage(
  target: IReflectNodeReference
): AvoidUsingGroupFeedback {
  if (target.type === "GROUP") {
    // TODO: update the logic to throw warning only if the layer is a non-graphical group. we can silence the warning for grapical groups.
    return new AvoidUsingGroupFeedback(target);
  }
}
