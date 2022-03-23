import { Module } from '@nestjs/common';
import { UsersService } from '../../services/user/users.service';
import { UsersController } from '../../controllers/user/users.controller';
import { PrismaService } from '../../database/prisma/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule { }
