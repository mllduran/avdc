import express from 'express'
import { SetupMainAppOptions } from '../main-app'
import { createDefaultErrorHandler } from './create-default-error-handler'

export const setupExpress = async (options: SetupMainAppOptions) => {
  const app: express.Express = express()

  app.set('trust proxy', true)
  app.set('x-powered-by', false)
  app.set('etag', false)

  const router = express.Router()

  options.setupRoutes(router)

  app.use(router)

  app.use(createDefaultErrorHandler('logger'))

  return { express: app }
}