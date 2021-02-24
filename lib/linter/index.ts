import { ReflectSceneNode } from "@bridged.xyz/design-sdk/lib/nodes";
import { ReflectLintFeedback } from "../feedbacks";
import { MissingTextStyleGeneralLinter } from "../text.lint";
import { Linter } from "./lint.base";
import { ComplexLinter } from "./lint.complex";
import { LintRunner } from "./lint.runner";

export * from "./lint.runner";

/**
 * Runs lint based on current user's node selection
 */
export class DefaultSeectionLintRunner extends LintRunner {
  constructor(readonly selection: ReflectSceneNode) {
    // const runner = new LintRunner();
    super({
      start: selection,
      root: selection,
      current: selection,
      linter: new AllPossibleLinter(),
    });
  }

  runLints(): ReadonlyArray<ReflectLintFeedback> {
    return this.runLintsOn(this.selection);
  }
}

export class AllPossibleLinter extends ComplexLinter {
  constructor() {
    super();
  }

  get rootLinters(): readonly Linter[] {
    return [new MissingTextStyleGeneralLinter()];
  }

  runLintsOn(
    node: ReflectSceneNode
  ): ReflectLintFeedback | readonly ReflectLintFeedback[] {
    throw new Error("Method not implemented.");
  }
}
