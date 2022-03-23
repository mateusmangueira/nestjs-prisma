import { Injectable } from '@nestjs/common';
import { Product, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) { }

  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    try {
      return this.prisma.product.create({
        data,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          console.log(
            'Erro no createProduct - products.service.ts: Produto nao foi criado',
          );
        }
      }
      throw e;
    }
  }

  async updateProduct(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    const { where, data } = params;
    try {
      return this.prisma.product.update({
        data,
        where,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          console.log(
            'Erro no updateProduct - product.service.ts: Nao foi possivel modificar o produto',
          );
        }
      }
      throw e;
    }
  }

  async deleteProduct(where: Prisma.ProductWhereUniqueInput): Promise<Product> {
    try {
      return this.prisma.product.delete({
        where,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          console.log(
            'Erro no deleteProduct - product.service.ts: Produto não pode ser deletado',
          );
        }
      }
      throw e;
    }
  }

  async product(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput,
  ): Promise<Product | null> {
    try {
      return this.prisma.product.findUnique({
        where: productWhereUniqueInput,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          console.log(
            'Erro no product - products.service.ts: Produto não existe',
          );
        }
      }
      throw e;
    }
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProductWhereUniqueInput;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput;
  }): Promise<Product[]> {
    const { skip, take, cursor, where, orderBy } = params;

    try {
      return this.prisma.product.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          console.log(
            'Erro no products - products.service.ts: Não conseguiu listar produtos do BD',
          );
        }
      }
      throw e;
    }
  }
}
