import { NextFunction, Request, Response } from "express";

export function LoggerGlobal (req: Request, res: Response, next: NextFunction) {
  const actualDate = new Date()
  console.log(`[${actualDate.toLocaleDateString()} - ${actualDate.toLocaleTimeString()}] ${req.method} ${req.url}`);
  next()
}