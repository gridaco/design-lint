export abstract class BaseProcessor<I, O> {
  constructor() {}

  abstract process(input: I): O | readonly O[];
}
