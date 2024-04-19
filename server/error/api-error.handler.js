export class ApiErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static notFound(message) {
    return new ApiErrorHandler(404, message);
  }

  static internal(message) {
    return new ApiErrorHandler(500, `Ошибка сервера: ${message}`);
  }

  static forbidden(message) {
    return new ApiErrorHandler(403, message);
  }
}