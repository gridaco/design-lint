export class LintOption {
  filter: LintRunnerFilterOption;
  range: LintRunnerRange;
  constructor(params?: {
    filter: LintRunnerFilterOption;
    range: LintRunnerRange;
  }) {
    this.filter = params && params?.filter;
    this.range = params && params?.range;
  }
}

export interface LintRunnerFilterOption {
  runsOnComponent: boolean;
}

/**
 * specifies the dpeth / range of the lint-running scope.
 */
export enum LintRunnerRange {
  /**
   * runs on all, including this. ignores upper tree including parent and root.
   */
  all = "lint-range.nodes.all",
  /**
   * runs on only this givven layer. runs on single layer
   */
  this = "lint-range.nodes.this",

  /**
   * runs lint from this parent, from to this. (all)
   */
  fromParent = "lint-range.nodes.from-parent",

  /**
   * runs lint from this parent, down to this.
   */
  fromParentForDirectChildren = "lint-range.nodes.from-parent-for-direct-children",

  /**
   * runs lint from root, down from this. (all)
   */
  fromRoot = "lint-range.nodes.from-root",

  /**
   * runs lint for this' children, looped
   */
  forDirectChildren = "lint-range.nodes.for-children",
}
