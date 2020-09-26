import { ReflectLintFeedback } from "..";

export class InvalidCharacterInNameError extends ReflectLintFeedback {
    constructor(givven: string, invalidToken: string) {
        super(`the givven name ${givven} contains invalid token ${invalidToken}.`);
    }
}