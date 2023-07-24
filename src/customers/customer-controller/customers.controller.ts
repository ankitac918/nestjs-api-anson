import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomersService } from '../customer-service/customers.service';
import { CreateCustomerDto } from '../dtos/create-customer.dto';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) { }

    @Get('/search/:id')
    getCustomer(@Param('id', ParseIntPipe) id: number) {
        const customer = this.customersService.getCustomerById(id)
        if (customer) return customer;
        throw new HttpException('customer not found', HttpStatus.NOT_FOUND)
    }

    @Get()
    getAllCustomer() {
        return this.customersService.getAllCustomers()
    }

    @Post('create')
    cerateCustomer(@Body() createCustomer: CreateCustomerDto) {
        this.customersService.createCustomers(createCustomer)
    }
}
