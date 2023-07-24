import { IsNumber, IsString } from "class-validator";

export class AddressDto {
    @IsString()
    lane1: string;

    @IsString()
    lane2: string;

    @IsString()
    city: string;

    @IsNumber()
    zip: number;

    @IsString()
    state: string
}