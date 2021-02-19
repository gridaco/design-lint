export class ReflectValidation {
  constructor(readonly valid: boolean, readonly reason?: string) {}
}

export class Valid extends ReflectValidation {
  constructor(readonly reason?: string) {
    super(true, reason);
  }
}

export class Invalid extends ReflectValidation implements Error {
  constructor(readonly reason?: string) {
    super(false, reason);
    this.name = "invalid";
    this.message = reason;
    this.stack = undefined;
  }
  name: string;
  message: string;
  stack?: string;
}
