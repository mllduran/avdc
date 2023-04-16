import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // custom error handler

  console.log("HELLO?")

  next(err) // fallback to default error handler in api-bootstrap
}