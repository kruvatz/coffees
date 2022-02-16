import { isString, IsString } from "class-validator";

// class validator'ın optionlarını öğrenmek için dokumentasyonu karıştır.

export class CreateCoffeeDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;

    @IsString({each: true})
    readonly flavors: string[];
}
