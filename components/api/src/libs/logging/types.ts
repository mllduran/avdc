import * as Bunyan from 'bunyan'

export interface Config {
  name?: string
  level?: Bunyan.LogLevelString
  file?: string
  separator?: string
  /**
   * The root directory of the app creating the logger - usually the directory under components/ that has package.json in it.
   * If this isn't supplied then it will be automatically determined based on the location of the file that creates the logger,
   * which might not work depending on what module resolver is being used.
   */
  appRootDir?: string
}