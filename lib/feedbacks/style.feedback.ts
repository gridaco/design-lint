import { IReflectNodeReference } from "@bridged.xyz/design-sdk/lib/nodes";
import { ReflectLintFeedback } from ".";

export class MissingStyleFeedback extends ReflectLintFeedback {
    constructor(target: IReflectNodeReference, message: string) {
        super(target, message)
    }
}