//src/auth/auth.service.ts
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) { }

  async login(email: string, password: string) {
    // Step 1: Fetch a user with the given email
    const admin = await this.prisma.admin.findUnique({
      where: { email: email },
    });

    // If no user is found, throw an error
    if (!admin) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    // Step 2: Check if the password is correct
    const isPasswordValid = comparePassword(password, admin.password);

    // If password does not match, throw an error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    // Step 3: Generate a JWT containing the user's ID and return it
    return {
      accessToken: this.jwtService.sign({
        adminId: admin.id,
        email: admin.email,
      }),
      admin,
    };
  }
}
