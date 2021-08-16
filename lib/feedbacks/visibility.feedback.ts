import { IReflectNodeReference } from "@design-sdk/core/nodes/lignt";
import { ReflectLintFeedback } from "./feedback";

export class VisibilityFeedback extends ReflectLintFeedback {
  constructor(target: IReflectNodeReference, message: string) {
    super(target, message, "warning");
  }
}

export class InvisibleContentWarning extends VisibilityFeedback {
  constructor(target: IReflectNodeReference, message: string) {
    super(target, message);
  }
}
