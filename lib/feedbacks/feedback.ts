export class ReflectLintFeedback extends Error {
    userMessage: string
    constructor(message) {
        super(message);
        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name;
        this.userMessage = message;
    }
}

export type LintResults = boolean | Array<ReflectLintFeedback>