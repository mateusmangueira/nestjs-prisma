import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from '../../services/product/products.service';
import { Product as ProductModel } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('create')
  async createProduct(
    @Body() userData: { name: string; bar_code: string; price: string },
  ): Promise<ProductModel> {
    return this.productsService.createProduct(userData);
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<ProductModel> {
    return this.productsService.product({ id: Number(id) });
  }

  @Get('')
  async getUsers() {
    return this.productsService.users({});
  }
}

/*
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.productsService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
*/