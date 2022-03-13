import { IReflectNodeReference } from "@design-sdk/figma-node";
import { ReflectLintFeedback } from "./feedback";

export class ConstraintsFeedback extends ReflectLintFeedback {
  constructor(
    target: IReflectNodeReference,
    parent: IReflectNodeReference,
    is: string,
    but: string,
    so: string
  ) {
    super(
      target,
      `target node "${target.name}" in parent "${parent.name}" is visually aligned ${is}, but the constraint is set to ${but}. You might want to set it to ${so}.`,
      "warning"
    );
  }
}

/**
 * missing or miss configured constraints
 */
export class MissingConstraintsWarning extends ConstraintsFeedback {
  constructor(
    target: IReflectNodeReference,
    parent: IReflectNodeReference,
    is: string,
    but: string,
    so: string
  ) {
    super(target, parent, is, but, so);
  }
}

/**
 * only applied for group node.
 * suggest to change group to frame and set child's constraints individually.
 */
export class MixedContraintsWarning extends ConstraintsFeedback {
  constructor(
    target: IReflectNodeReference,
    parent: IReflectNodeReference,
    is: string,
    but: string,
    so: string
  ) {
    super(target, parent, is, but, so);
  }
}

export class AvoidUsingScaleWarning extends ConstraintsFeedback {}

export class AvoidUsingCenterWarning extends ConstraintsFeedback {}
