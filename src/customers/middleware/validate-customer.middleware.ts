import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Hello World.I am inside validateCustomerMiddleware');
        const { authorization } = req.headers;
        if (!authorization) return res.status(403).send({ Error: 'No Authentication Token Provided' })

        if (authorization === '123') {
            next();
        } else {
            return res.status(403).send({ Error: 'Invalid Token Provided'})
        }
    }
}