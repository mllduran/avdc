import * as Bunyan from 'bunyan'
import { Config } from './types'

export const createLogger = (config: Config, opts: Partial<Bunyan.LoggerOptions> = {} ): Bunyan => {
  const conf: Config = {
    name: 'default',
    level: 'info',
    ...config
  }

  const options = {
    ...conf,
    stream: process.stdout
  } as Bunyan.LoggerOptions

  const logger = Bunyan.createLogger(options)

  return logger
}