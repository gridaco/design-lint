import type {
  IReflectNodeReference,
  ReflectTextNode,
} from "@design-sdk/figma-node";
import { ReflectLintFeedback } from "./feedback";

export class NamingFeedback extends ReflectLintFeedback {
  constructor(target: IReflectNodeReference, message: string) {
    super(target, message, "error");
  }
}

export class InvalidCharacterInNameError extends NamingFeedback {
  constructor(target: IReflectNodeReference, invalidToken: string) {
    super(
      target,
      `the given name "${target.name}" contains invalid token ${invalidToken}.`
    );
  }
}

export class DefaultNameUsageWarning extends NamingFeedback {
  constructor(target: IReflectNodeReference) {
    super(
      target,
      `the given name "${target.name}" is default name. Recommanded to assign a different name.`
    );
  }
}

/**
 * @example the text layer "Hello world" is using a name from its content. Recommanded to assign a explicit semantic name.
 */
export class DefaultTextNameUsageWarning extends NamingFeedback {
  constructor(target: ReflectTextNode) {
    super(
      target,
      `the text layer "${target.name}" is using a name from its content. Recommanded to assign a explicit semantic name.`
    );
  }
}
