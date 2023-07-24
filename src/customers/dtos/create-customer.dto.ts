import { IsEmail, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { AddressDto } from "./address.dto";
import { Type } from "class-transformer";

export class CreateCustomerDto {
    @IsNumber()
    id: number;

    @IsEmail()
    email: string;

    @IsString()
    name: string

    @ValidateNested()
    @Type(() => AddressDto)
    @IsNotEmpty()
    address: AddressDto
}
