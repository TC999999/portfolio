class EmailError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

class InvalidEmailError extends EmailError {
  constructor(
    message = "The email address you have entered is invalid. Please type a valid one."
  ) {
    super(message, 400);
  }
}

class EmptyInputsError extends EmailError {
  constructor(message = "Please Fill Out Both Inputs.") {
    super(message, 400);
  }
}

export { EmailError, InvalidEmailError, EmptyInputsError };
