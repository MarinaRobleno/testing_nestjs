import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateReport {
    @IsString()
    make: string;

    @IsString()
    model: string;

    @IsString()
    @MinLength(4)
    year: string;

    @IsString()
    @MinLength(4)
    lng: string;

    @IsString()
    @MinLength(4)
    lat: string;

    @IsString()
    @MinLength(4)
    price: string;
}