export type ReflectLintFeedbackLevel = "error" | "warning" | "suggestion";
export class ReflectLintFeedback extends Error {
  readonly level: ReflectLintFeedbackLevel = "error";
  userMessage: string;
  node: { id: string; name: string; type: string };
  constructor(
    node: { id: string; name: string; type: string },
    message: string,
    level: ReflectLintFeedbackLevel
  ) {
    super(message);
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
    this.userMessage = message;
    this.node = { name: node.name, id: node.id, type: node.type };
    this.level = level;
  }
}

export type LintResults = boolean | Array<ReflectLintFeedback>;
