import { Accounts } from '@domain-model'

export const getAccounts = async () => {
  const foo = new Accounts()

  console.log(foo.name)

  return "ACCOUNT Service3"
}