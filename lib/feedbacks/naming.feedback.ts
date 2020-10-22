import { ReflectSceneNode } from "@bridged.xyz/design-sdk/lib/nodes";
import { ReflectLintFeedback } from "./feedback";


export class NamingFeedback extends ReflectLintFeedback {
    constructor(target: ReflectSceneNode, message: string) {
        super(target, message)
    }
}

export class InvalidCharacterInNameError extends NamingFeedback {
    constructor(target: ReflectSceneNode, invalidToken: string) {
        super(target, `the given name "${target.name}" contains invalid token ${invalidToken}.`);
    }
}

export class DefaultNameUsageWarning extends NamingFeedback {
    constructor(target: ReflectSceneNode) {
        super(target, `the given name "${target.name}" is default name. Recommanded to assign a different name.`);
    }
}