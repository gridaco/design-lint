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
