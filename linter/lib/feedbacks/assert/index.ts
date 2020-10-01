import { ReflectLintFeedback } from "..";

export class InvalidCharacterInNameError extends ReflectLintFeedback {
    constructor(givven: string, invalidToken: string) {
        super(`the given name ${givven} contains invalid token ${invalidToken}.`);
    }
}

export class FigmaDefaultNameInNameError extends ReflectLintFeedback {
    constructor(given: string, invalidToken: string) {
        super(`the given name ${given} contains invalid token ${invalidToken}.`);
    }
}