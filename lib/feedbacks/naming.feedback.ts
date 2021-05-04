import { IReflectNodeReference } from "@design-sdk/core/nodes/lignt";
import { ReflectLintFeedback } from "./feedback";

export class NamingFeedback extends ReflectLintFeedback {
  constructor(target: IReflectNodeReference, message: string) {
    super(target, message);
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
