import { ReflectSceneNode } from "@design-sdk/core/nodes";
import InvalidCharacterLint from "./invalid-character.lint";
import lintDefaultNameUsage from "./default-name.lint";
import { ReflectLintFeedback } from "../feedbacks/feedback";
import { GenerallLinter } from "../linter/lint.general";

export function lintGeneralLayerNamingConvention(
  target: ReflectSceneNode
): Array<ReflectLintFeedback> {
  // run linting by priority
  const feedbacks: Array<ReflectLintFeedback> = [];
  feedbacks.push(InvalidCharacterLint(target));
  feedbacks.push(lintDefaultNameUsage(target));
  return feedbacks.filter((i) => {
    return i !== undefined;
  });
}

export class NamingConventionGeneralLinter extends GenerallLinter {
  constructor(parameters) {
    super();
  }

  runLintsOn(
    node: ReflectSceneNode
  ): ReflectLintFeedback | ReadonlyArray<ReflectLintFeedback> {
    return lintGeneralLayerNamingConvention(node);
  }
}
