import { ReflectSceneNode } from "@design-sdk/figma-node";
import { ReflectLintFeedback } from "../feedbacks";

export abstract class Linter<N = ReflectSceneNode> {
  constructor() {}

  abstract runLintsOn(
    node: N
  ): ReadonlyArray<ReflectLintFeedback> | ReflectLintFeedback;
}
