import { IReflectNodeReference } from "@design-sdk/figma-node";
import { ReflectLintFeedback } from ".";

export class MissingStyleFeedback extends ReflectLintFeedback {
  constructor(target: IReflectNodeReference, message: string) {
    super(target, message, "warning");
  }
}

/**
 * Base MissingColorStyle feedback. feedbacks such as missing TextColorStyleFeedback extends this.
 * This also has a general usage, this can be used as-is feedback as a root feedback. means: returning this as a feedback is fine.
 */
export class MissingColorStyleFeedback extends MissingStyleFeedback {
  constructor(target: IReflectNodeReference, message: string) {
    super(target, message);
  }
}
