import { Router } from "express";
import * as accountsRoute from './accounts'
import { errorHandler } from '../middlewares/errors'

export const setupRoutes = (router: Router) => {
  router.get('/foo', (req, res, next) => {
    res.send("HELLO WORLD")
  })

  router.get('/accounts', accountsRoute.getAccounts)

  // router.use(errorHandler)
}