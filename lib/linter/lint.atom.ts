import { ReflectSceneNode } from "@design-sdk/figma-node";
import { ReflectLintFeedback } from "../feedbacks/feedback";
import { Linter } from "./lint.base";

/**
 * The atom linter. the atom linter can be executed on desired target. if the input and desired target doesn't match it will be simply ignored.
 * E.g. MissingTextStyleAtomLinter can only be executed on ReflectTextNode
 */
export abstract class AtomLinter<
  NODE extends ReflectSceneNode = ReflectSceneNode,
  FEEDBACK extends ReflectLintFeedback = ReflectLintFeedback
> extends Linter<NODE> {
  constructor() {
    super();
  }

  abstract validateTypeMatch(node: ReflectSceneNode): boolean;

  cast(node: ReflectSceneNode): NODE {
    return node as NODE;
  }

  abstract runOn(node: NODE): FEEDBACK | ReadonlyArray<FEEDBACK>;
}

export function handleAtomLinter(
  atomLinter: AtomLinter,
  node: ReflectSceneNode
) {
  if (!atomLinter.validateTypeMatch(node)) {
    return;
  }
  const casted = atomLinter.cast(node);
  atomLinter.runOn(casted);
}
