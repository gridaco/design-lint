import { IReflectNodeReference } from "@bridged.xyz/design-sdk/lib/nodes";
import { ReflectLintFeedback } from "./feedback";

export class VisibilityFeedback extends ReflectLintFeedback {
    constructor(target: IReflectNodeReference, message: string) {
        super(target, message);
    }
}

export class InvisibleContentWarning extends VisibilityFeedback {
    constructor(target: IReflectNodeReference, message: string) {
        super(target, message);
    }
}