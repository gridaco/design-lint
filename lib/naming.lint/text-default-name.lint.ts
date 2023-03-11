import type { ReflectTextNode } from "@design-sdk/figma-node";
import { DefaultTextNameUsageWarning } from "../feedbacks/naming.feedback";

export default function lintTextDefaultNameUsage(
  target: ReflectTextNode
): DefaultTextNameUsageWarning {
  if (
    target.autoRename ||
    // if text longer than n chars, it needs to be renamed
    (target.data.length > 30 && target.name === target.data)
  ) {
    return new DefaultTextNameUsageWarning(target);
  }
}
