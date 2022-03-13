export class ScreenFeedback {
  constructor(parameters) {}
}

export class ResponsibleScreenFeedback extends ScreenFeedback {
  constructor(parameters) {
    super(parameters);
  }
}

/**
 * @example Warning: e.g. The index screen "pricing" is registered as a XL size web screen, but other sizes LG, MD, SM, XS is not found.
 */
export class ResponsibleScreenSetMissingWarning extends ResponsibleScreenFeedback {
  constructor(parameters) {
    super(parameters);
  }
}
