import { Express } from "express"
import { setupMainApp } from "../libs/api-bootstrap"
import { rootLogger } from "./shared"
import { setupRoutes } from './routes'

const logger = rootLogger

const listen = (app: Express, name: string, port: number) => {
  return app.listen(port, () => {
    logger.info(`Express ${name} server running at http://0.0.0.0:${port}/`)
  })
}

Promise.all([
  setupMainApp({
    setupRoutes
  }),
])
  .then(([mainApp]) => {

    const mainServer = listen(mainApp.express, 'main', 8080)

    process.on('SIGTERM', () => {
      mainServer.close(() => {
        logger.info('mainApp stopped by sigterm')
      })
    })
  })
  .catch((err) => {
    console.log(err) // eslint-disable-line
    process.exit(1)
  })