import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule, 
    MongooseModule.forRoot(
    'mongodb+srv://sarwir:UwOupSTJqhj6MUNe@cluster0.36mf4ku.mongodb.net/berberlin?retryWrites=true&w=majority',
  )
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
