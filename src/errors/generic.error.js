class GenericError extends Error {
  constructor(message, statusCode, body){
    super(`[Error/Generic]: ${message}` || "[Error/Generic]: Something Went Wrong");
    this.statusCode = 500;
    this.body = body || {}
  }
}
