import { NextFunction, Request, Response } from "express"

export const getAccounts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Service Call
    throw new Error("BROKEN")
    res.send("GET ACCOUNTS")
  } catch (error) {
    next(error)
  }
}