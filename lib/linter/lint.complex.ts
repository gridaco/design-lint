import { Linter } from "./lint.base";

export abstract class ComplexLinter extends Linter {
  constructor() {
    super();
  }

  abstract get rootLinters(): ReadonlyArray<Linter>;
}
