export class LintOption {
  constructor() {}
}

export interface LintRunnerRangeOption {
  runsOnComponent: boolean;
  runsFromParent: boolean;
  runsFrommRoot: boolean;
}

/**
 * specifies the dpeth / range of the lint-running scope.
 */
export enum LintRunnderDepth {
  /**
   * runs on all, including this. ignores upper tree including parent and root.
   */
  all = "lint-range.nodes.all",
  /**
   * runs on only this givven layer. runs on single layer
   */
  this = "lint-range.nodes.this",

  /**
   * runs lint from this parent, down to this.
   */
  fromParent = "lint-range.nodes.from-parent",

  /**
   * runs lint from root, down to this.
   */
  fromRoot = "lint-range.nodes.from-root",

  /**
   * runs lint for this' children, looped
   */
  forChildren = "lint-range.nodes.for-children",

  /**
   * runs lint for this' children, looped, make linter relative to `this`
   */
  forChildrenRelativeToThis = "lint-range.nodes.for-children-reative-to-this",
}
