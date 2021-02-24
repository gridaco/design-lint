import { LintOption, LintRunnerRange } from "./lint.option";

/**
 * Runs lints on all layer except component's insttances
 */
export class RunAllUnerExceptInstances extends LintOption {
  range = LintRunnerRange.all;
  filter = {
    runsOnComponent: false,
  };
  constructor() {
    super();
  }
}

/**
 * Runs lints on all layer, with no exception.
 */
export class RunAllUnderAll extends LintOption {
  range = LintRunnerRange.all;
  filter = undefined;
}
