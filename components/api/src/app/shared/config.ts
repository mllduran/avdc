import convict from 'convict'
import validators from 'convict-format-with-validator'

convict.addFormats(validators);

const createConfig = (definition: object) => {
  const config = convict(definition);

  return config;
}


export {
  createConfig
}