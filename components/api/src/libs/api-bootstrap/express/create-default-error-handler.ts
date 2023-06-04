import { ErrorRequestHandler } from 'express'

export const createDefaultErrorHandler = (logger: any): ErrorRequestHandler => {
  return (err, req, res, next) => {
    console.log(err.stack)

    res.status(500).send('Something Broke!!!')
  }
}