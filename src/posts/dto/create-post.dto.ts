import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePostDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    @IsOptional()
    startDate: Date;

    @ApiProperty()
    @IsOptional()
    endDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    goalAmount: number;

    @ApiProperty()
    @IsNotEmpty()
    currentAmount: number;

    @ApiProperty()
    imageUrl: string;

    @ApiProperty()
    view: number;
}
