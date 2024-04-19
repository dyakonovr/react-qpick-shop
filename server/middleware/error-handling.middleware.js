import { ApiErrorHandler } from "../error/api-error.handler.js"

export function ErrorHandlingMiddleware(err, req, res, next) {
  if (err instanceof ApiErrorHandler) {
    return res.status(err.status).json({message: err.message})
  }

  return res.status(500).json({message: "Непредвиденная ошибка"})
}