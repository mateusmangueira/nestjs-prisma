import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
