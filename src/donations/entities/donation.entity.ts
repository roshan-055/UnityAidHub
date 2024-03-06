import { ApiProperty } from "@nestjs/swagger";
import { $Enums, Donation, Payment } from "@prisma/client";

export class DonationEntity implements Donation {
    @ApiProperty()
    clientSecret: string;
    
    @ApiProperty()
    payment: Payment;

    @ApiProperty()
    id: number;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    remarks: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiProperty()
    postId: number;

    @ApiProperty()
    userId: number;
}
