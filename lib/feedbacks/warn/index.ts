import { ReflectLintFeedback } from "..";

export class MissingConstraintsWarning extends ReflectLintFeedback {
    constructor(target: string, parent: string, is: string, but: string, so: string) {
        super(`target node "${target}" in parent "${parent}" is visually aligned ${is}, but the constraint is set to ${but}. You might want to set it to ${so}.`);
    }
}