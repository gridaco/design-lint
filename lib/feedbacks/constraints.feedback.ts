import { ReflectLintFeedback } from "./feedback";


export class ConstraintsFeedback extends ReflectLintFeedback {
    constructor(target: string, parent: string, is: string, but: string, so: string) {
        super(`target node "${target}" in parent "${parent}" is visually aligned ${is}, but the constraint is set to ${but}. You might want to set it to ${so}.`);
    }
}

/**
 * missing or miss configured constraints
 */
export class MissingConstraintsWarning extends ConstraintsFeedback {
    constructor(target: string, parent: string, is: string, but: string, so: string) {
        super(target, parent, is, but, so);
    }
}

/**
 * only applied for group node.
 * suggest to change group to frame and set child's constraints individually.
 */
export class MixedContraintsWarning extends ConstraintsFeedback {
    constructor(target: string, parent: string, is: string, but: string, so: string) {
        super(target, parent, is, but, so);
    }
}