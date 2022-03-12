import { ReflectSceneNode } from "@design-sdk/figma-node";
import invalidCharacterLint from "./invalid-character.lint";
import lintDefaultNameUsage from "./default-name.lint";
import lintTextDefaultNameUsage from "./text-default-name.lint";
import { ReflectLintFeedback } from "../feedbacks/feedback";
import { GenerallLinter } from "../linter/lint.general";

export function lintGeneralLayerNamingConvention(
  target: ReflectSceneNode
): Array<ReflectLintFeedback> {
  // run linting by priority
  const feedbacks: Array<ReflectLintFeedback> = [];
  feedbacks.push(invalidCharacterLint(target));
  feedbacks.push(lintDefaultNameUsage(target));

  // text specific linting
  if (target.type === "TEXT") {
    feedbacks.push(lintTextDefaultNameUsage(target));
  }

  return feedbacks.filter(Boolean);
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
