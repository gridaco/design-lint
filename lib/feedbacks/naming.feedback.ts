import { ReflectLintFeedback } from "./feedback";


export class NamingFeedback extends ReflectLintFeedback {
    constructor(message) {
        super(message)
    }
}

export class InvalidCharacterInNameError extends NamingFeedback {
    constructor(givven: string, invalidToken: string) {
        super(`the given name ${givven} contains invalid token ${invalidToken}.`);
    }
}

export class DefaultNameUsageWarning extends NamingFeedback {
    constructor(given: string) {
        super(`the given name ${given} is default name. Please make a different name.`);
    }
}