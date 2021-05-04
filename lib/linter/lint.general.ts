import { ReflectSceneNode } from "@design-sdk/core/nodes";
import { LintingOptionProcessor } from "../utils/processors";
import { Linter } from "./lint.base";
import { LintOption } from "./lint.option";

/**
 * A General Linter. General Linter is a set of linters / groups that can be targetted on any nodes, but executes on a smaller level on its each child.
 * E.g. NameLinter and MissingTextStyle Linter is a Genera Linter which is a set of segments holding InvalidCharacterAtomLinter and MissingTextStyleAtomLinter.
 */
export abstract class GenerallLinter extends Linter {
  constructor() {
    super();
  }
  option: LintOption;

  getTargetsOf(node: ReflectSceneNode) {
    if (!this.option) {
      throw `this linter ${this} does not contain option for filtering flat targets. if you want to target all possible nodes, \`AllExceptInstances\` is a recommended option`;
    }
    const optionProcessor = new LintingOptionProcessor(this.option);
    const result = optionProcessor.process(node);
    return result;
  }

  /**
   * retursn flat mapped target nodes filtered from option and it's range.
   * for example, if AllExceptInstances as a option provided, all nodes except from instance layer will all be returned as a flat target
   */
  getFlatTargetsOf(node: ReflectSceneNode): readonly ReflectSceneNode[] {
    return node.getGrandchildren({
      includeThis: true,
    });
  }
}
