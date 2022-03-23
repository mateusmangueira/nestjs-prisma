import { Module } from '@nestjs/common';
import { ProductsService } from '../../services/product/products.service';
import { ProductsController } from '../../controllers/product/products.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
})
export class ProductsModule { }
