import { IReflectNodeReference } from "@bridged.xyz/design-sdk/lib/nodes";
import { MissingStyleFeedback } from "./style.feedback";

export class MissingTextStyleWarning extends MissingStyleFeedback {
    constructor(target: IReflectNodeReference) {
        super(target, `missing text style on text node "${target.name}"`)
    }
}