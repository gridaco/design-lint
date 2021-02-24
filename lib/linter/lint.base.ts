import { ReflectSceneNode } from "@bridged.xyz/design-sdk/lib/nodes";
import { ReflectLintFeedback } from "../feedbacks";

export abstract class Linter<N = ReflectSceneNode> {
  constructor() {}

  abstract runLintsOn(
    node: N
  ): ReadonlyArray<ReflectLintFeedback> | ReflectLintFeedback;
}
