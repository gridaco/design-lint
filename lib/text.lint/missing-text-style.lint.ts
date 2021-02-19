import {
  ReflectSceneNode,
  ReflectSceneNodeType,
  ReflectTextNode,
} from "@bridged.xyz/design-sdk/lib/nodes";
import { ReflectLintFeedback } from "../feedbacks";
import { MissingTextStyleWarning } from "../feedbacks/text-style.feedback";
import { AtomLinter } from "../linter/lint.atom";
import { GenerallLinter } from "../linter/lint.general";
import { RunAllUnerExceptInstances } from "../linter/lint.options";

export function lintMissingTextStyle(
  node: ReflectTextNode
): ReflectLintFeedback {
  if (!node.hasTextStyle) {
    return new MissingTextStyleWarning(node.copyAsSnippet());
  }
  return undefined;
}

export class MissingTextStyleGeneralLinter extends GenerallLinter {
  option = new RunAllUnerExceptInstances();

  runLintsOn(
    node: ReflectSceneNode
  ): ReflectLintFeedback | readonly ReflectLintFeedback[] {
    throw new Error("Method not implemented.");
  }
}

export class MissingTextStyleAtomLinter extends AtomLinter<
  ReflectTextNode,
  MissingTextStyleWarning
> {
  runOn(
    node: ReflectTextNode
  ): MissingTextStyleWarning | readonly MissingTextStyleWarning[] {
    return lintMissingTextStyle(node);
  }
  runLintsOn(
    node: ReflectTextNode
  ): ReflectLintFeedback | readonly ReflectLintFeedback[] {
    return lintMissingTextStyle(node);
  }
  validateTypeMatch(node: ReflectSceneNode): boolean {
    return node.type == ReflectSceneNodeType.text;
  }
}
