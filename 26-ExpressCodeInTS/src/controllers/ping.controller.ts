import type { Request, Response } from "express"

export const pingHandler = (req:Request, res:Response):void => {
    res.send("Hello!!I am listening");
}

