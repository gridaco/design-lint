import { ReflectSceneNode } from "@bridged.xyz/design-sdk/lib/nodes";

export class ReflectLintFeedback extends Error {
    userMessage: string
    node: ReflectSceneNode
    constructor(node: ReflectSceneNode, message: string) {
        super(message);
        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name;
        this.userMessage = message;
        this.node = node;
    }
}

export type LintResults = boolean | Array<ReflectLintFeedback>