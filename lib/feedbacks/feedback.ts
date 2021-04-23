import { IReflectNodeReference } from "@bridged.xyz/design-sdk/lib/nodes/lignt";

export class ReflectLintFeedback extends Error {
  userMessage: string;
  node: IReflectNodeReference;
  constructor(node: IReflectNodeReference, message: string) {
    super(message);
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
    this.userMessage = message;
    this.node = node;
  }
}

export type LintResults = boolean | Array<ReflectLintFeedback>;
