import { Injectable } from '@nestjs/common';
import { Customer } from '../types/Customers';
import { CreateCustomerDto } from '../dtos/create-customer.dto';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id: 1,
            email: 'ankit@gmail.com',
            name: 'ankit'
        },
        {
            id: 2,
            email: 'ankit2@gmail.com',
            name: 'chauhan'
        },
        {
            id: 3,
            email: 'ankit3@gmail.com',
            name: 'abc'
        },
    ];
    getCustomerById(id: number) {
        return this.customers.find((user) => user.id === id)
    }

    getAllCustomers(){
        return this.customers;
    }

    createCustomers(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto);
    }
}
