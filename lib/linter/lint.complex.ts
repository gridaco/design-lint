import { ReflectSceneNode } from "@bridged.xyz/design-sdk/lib/nodes/types";
import { ReflectLintFeedback } from "../feedbacks/feedback";
import { Linter } from "./lint.base";

export abstract class ComplexLinter extends Linter {
  constructor() {
    super();
  }

  abstract get rootLinters(): ReadonlyArray<Linter>;

  runLintsOn(node: ReflectSceneNode): ReadonlyArray<ReflectLintFeedback> {
    const feedbacks = [];
    const linters = this.rootLinters;
    for (const linter of linters) {
      const feedbackFromSingleLinter = linter.runLintsOn(node);

      // register result
      if (Array.isArray(feedbackFromSingleLinter)) {
        feedbacks.push(...feedbackFromSingleLinter);
      } else {
        feedbacks.push(feedbackFromSingleLinter);
      }
    }

    return feedbacks;
  }
}
