import { NextFunction, Request, Response } from "express"
import { getAccounts } from "../../services/accounts"

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Service Call
    const accounts = await getAccounts()
    // Mapping
    res.send({ accounts })
  } catch (error) {
    next(error)
  }
}