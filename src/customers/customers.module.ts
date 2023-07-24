import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersService } from './customer-service/customers.service';
import { CustomersController } from './customer-controller/customers.controller';
import { ValidateCustomerMiddleware } from './middleware/validate-customer.middleware';
import { validateCustomerAccountMiddleware } from './middleware/validate-customer-account.middleware';
import { NextFunction, Request, Response } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCustomerMiddleware, validateCustomerAccountMiddleware, (req: Request, res: Response, next: NextFunction) => {
      console.log("last middleware");
      next();
    })
      // .exclude({
      //   path: 'customers/create',
      //   method: RequestMethod.POST
      // })  
      // .exclude({
      //   path: 'customers',
      //   method: RequestMethod.GET
      // })
      .forRoutes('customers');
  }
}
