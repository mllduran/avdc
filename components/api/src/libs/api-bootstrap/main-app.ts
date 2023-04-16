import { Express, Router } from 'express'
import { setupExpress } from './express'

export interface SetupMainAppOptions {
  setupRoutes: (router: Router) => void
}

interface SetupMainAppOutputs {
  express: Express
}

export const setupMainApp = async (options: SetupMainAppOptions): Promise<SetupMainAppOutputs> => {

  return setupExpress(options)
}