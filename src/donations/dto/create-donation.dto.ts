import { ApiProperty } from "@nestjs/swagger"
import { Payment } from "@prisma/client";
import { IsNotEmpty, IsOptional } from "class-validator"

export class CreateDonationDto {

    @ApiProperty()
    @IsNotEmpty()
    amount:number;

    @ApiProperty()
    @IsOptional()
    remarks:string;
    
    @ApiProperty()
    @IsNotEmpty()
    postId:number;

    @ApiProperty()
    @IsNotEmpty()
    userId:number;

    @ApiProperty()
    @IsOptional()
    payment:Payment;
}