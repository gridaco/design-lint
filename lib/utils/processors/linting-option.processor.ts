import { ReflectSceneNode } from "@design-sdk/figma-node";
import { LintOption, LintRunnerRange } from "../../linter/lint.option";
import { BaseProcessor } from "./base.processor";

export class LintingOptionProcessor extends BaseProcessor<
  ReflectSceneNode,
  ReflectSceneNode
> {
  constructor(readonly option: LintOption) {
    super();
  }

  process(input: ReflectSceneNode): readonly ReflectSceneNode[] {
    console.log(`running LintingOptionProcessor on input ${input.name}`);
    // handle this.option.range
    let rangeTargets: ReflectSceneNode[] = [];
    if (this.option.range) {
      switch (this.option.range) {
        case LintRunnerRange.this:
          rangeTargets = [input];
          break;

        case LintRunnerRange.forDirectChildren:
          rangeTargets = input.children;

        case LintRunnerRange.all:
          rangeTargets = Array.from(
            input.getGrandchildren({
              includeThis: true,
            })
          );

        default:
          throw `handler for range type "${this.option.range}" is not ready.`;
      }
    }

    // handle filter along the nodes inside the range
    let filteredTargets = rangeTargets;
    if (this.option.filter) {
      if (!this.option.filter.runsOnComponent) {
        // if node is component, remove it
        filteredTargets = filteredTargets.filter((n) => !n.isComponent);
      }
    }

    console.log(
      `LintingOptionProcessor's result for input ${input.name} is`,
      filteredTargets
    );

    return filteredTargets;
  }
}
