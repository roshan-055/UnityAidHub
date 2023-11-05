import { ApiProperty } from "@nestjs/swagger"
import { IsOptional, IsString } from "class-validator";

export class CreateEmailNotificationDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    subject:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    body:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    attachments:string;
}