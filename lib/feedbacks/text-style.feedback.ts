import { IReflectNodeReference } from "@design-sdk/figma-node";
import {
  MissingColorStyleFeedback,
  MissingStyleFeedback,
} from "./style.feedback";

export class MissingTextStyleWarning extends MissingStyleFeedback {
  constructor(target: IReflectNodeReference) {
    super(target, `missing text style on text node "${target.name}"`);
  }
}

export class MissingTextColorStyleWarning extends MissingColorStyleFeedback {
  constructor(target: IReflectNodeReference) {
    super(target, `missing text color style on text node "${target.name}"`);
  }
}

/**
 * @example the text layer "Hello world" is using more than 4 colors in a single layer. Recommanded to split the text by color usages.
 */
export class TooManyColorsInTextWarning {}
