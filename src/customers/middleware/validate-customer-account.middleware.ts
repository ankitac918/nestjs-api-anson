import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class validateCustomerAccountMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { valid } = req.headers;
        console.log('hello i am customer Account Middleware');
        if (valid) {
            next()
        } else {
            res.status(401).send({ Error: 'Account is invalid' })
        }
    }
}
