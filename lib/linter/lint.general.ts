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
}
