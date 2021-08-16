import { IReflectNodeReference } from "@design-sdk/core/nodes/lignt";

export type ReflectLintFeedbackLevel = "error" | "warning" | "suggestion";
export class ReflectLintFeedback extends Error {
  readonly level: ReflectLintFeedbackLevel = "error";
  userMessage: string;
  node: IReflectNodeReference;
  constructor(
    node: IReflectNodeReference,
    message: string,
    level: ReflectLintFeedbackLevel
  ) {
    super(message);
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
    this.userMessage = message;
    this.node = node;
    this.level = level;
  }
}

export type LintResults = boolean | Array<ReflectLintFeedback>;
