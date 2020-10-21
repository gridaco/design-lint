export class ReflectLintFeedback extends Error {
    constructor(message) {
        super(message);
        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name;
    }
}

export type LintResults = boolean | Array<ReflectLintFeedback>