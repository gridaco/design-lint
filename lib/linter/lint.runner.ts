import { lintMissingConstraints } from "../structure.lint/constraints.lint";
import { lintGeneralLayerNamingConvention } from "../naming.lint";
import { ReflectLintFeedback } from "../feedbacks";
import { ReflectSceneNode } from "@design-sdk/figma-node";
import { MissingTextStyleGeneralLinter } from "../text.lint/missing-text-style.lint";
import { LintRunnerRange, LintRunnerFilterOption } from "./lint.option";
import { Linter } from "./lint.base";
import { vaidateLintableNodeSize } from "./validation.pre/node-size.validation";
import { Valid } from "../feedbacks/validation";

export class LintRunner {
  start: ReflectSceneNode;
  root: ReflectSceneNode;
  current: ReflectSceneNode;
  linter: Linter;
  /**
   *
   * @param config optional inter config override (custom config json)
   */
  constructor(params: {
    start: ReflectSceneNode;
    root: ReflectSceneNode;
    current: ReflectSceneNode;
    linter: Linter;
    config?;
  }) {
    this.start = params.start;
    this.root = params.root;
    this.current = params.current;
    this.linter = params.linter;
  }

  /**
   * run lints on target node
   * @param node target node
   */
  runLintsOn(
    node: ReflectSceneNode,
    depth?: LintRunnerRange,
    option?: LintRunnerFilterOption
  ): ReadonlyArray<ReflectLintFeedback> {
    //
    // region validations
    //
    if (depth) {
      throw `"depth" parameter is not supported at this moment.`;
    }
    if (option) {
      throw `"option" parameter is not supported at this moment.`;
    }

    // reject if selected node is too big for it's size or child count.
    const sizeValidatiion = vaidateLintableNodeSize(node);
    if (!(sizeValidatiion instanceof Valid)) {
      throw sizeValidatiion;
    }
    //
    // endregion validations
    //

    //
    // START OF LOGICAL CODE
    //
    const feedbacks: Array<ReflectLintFeedback> = [];

    // NOTE - TODO - this currently runs lint to depth 1, direct children.
    // Need to be fixed to iterate through all possible layers
    if (node.hasChildren) {
      node.children.forEach((cn) => {
        runLegacyLints(cn);
      });
    } else {
      runLegacyLints(node);
    }

    function runLegacyLints(node: ReflectSceneNode) {
      // constraints lints
      const constraintsWarnings = lintMissingConstraints(node);
      if (Array.isArray(constraintsWarnings)) {
        feedbacks.push(...constraintsWarnings);
      }

      // naming lints
      const namingFeedbacks = lintGeneralLayerNamingConvention(node);
      if (Array.isArray(namingFeedbacks)) {
        feedbacks.push(...namingFeedbacks);
      }
    }

    // text style lints
    // missing text style lint
    const textStyleFeedbacks = new MissingTextStyleGeneralLinter().runLintsOn(
      node
    );
    if (textStyleFeedbacks) {
      feedbacks.push(...textStyleFeedbacks);
    }

    return feedbacks;
  }
}
