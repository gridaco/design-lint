import { ReflectLintFeedback } from "..";

export class InvalidCharacterInNameError extends ReflectLintFeedback {
    constructor(givven: string, invalidToken: string) {
        super(`the given name ${givven} contains invalid token ${invalidToken}.`);
    }
}

export class DefaultNameUsageWarning extends ReflectLintFeedback {
    constructor(given: string) {
        super(`the given name ${given} is default name. Please make a different name.`);
    }
}