import {
  ReflectSceneNode,
  ReflectSceneNodeType,
  ReflectTextNode,
} from "@bridged.xyz/design-sdk/lib/nodes";
import { ReflectLintFeedback } from "../feedbacks";
import { MissingTextStyleWarning } from "../feedbacks/text-style.feedback";
import { AtomLinter } from "../linter/lint.atom";
import { GenerallLinter } from "../linter/lint.general";
import { RunAllUnderAll } from "../linter/lint.options";

export function lintMissingTextStyle(
  node: ReflectTextNode
): ReflectLintFeedback {
  if (!node.hasTextStyle) {
    return new MissingTextStyleWarning(node.copyAsSnippet());
  }
  return undefined;
}

export class MissingTextStyleGeneralLinter extends GenerallLinter {
  option = new RunAllUnderAll();

  runLintsOn(node: ReflectSceneNode): readonly ReflectLintFeedback[] {
    const feedbacks = [];
    const targets = this.getFlatTargetsOf(node);
    for (const n of targets) {
      if (n.type == ReflectSceneNodeType.text) {
        const atomLinter = new MissingTextStyleAtomLinter();
        const feedback = atomLinter.runOn(n as ReflectTextNode);
        if (feedback) {
          feedbacks.push(feedback);
        }
      }
    }

    return feedbacks;
  }
}

export class MissingTextStyleAtomLinter extends AtomLinter<
  ReflectTextNode,
  MissingTextStyleWarning
> {
  runOn(node: ReflectTextNode): MissingTextStyleWarning | undefined {
    return lintMissingTextStyle(node);
  }
  runLintsOn(node: ReflectTextNode): ReflectLintFeedback | undefined {
    return lintMissingTextStyle(node);
  }
  validateTypeMatch(node: ReflectSceneNode): boolean {
    return node.type == ReflectSceneNodeType.text;
  }
}
