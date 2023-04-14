import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private ProductModel:Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto) {

    const createdProduct = new this.ProductModel(createProductDto);
    const savedProduct = await createdProduct.save();
    console.log(savedProduct);

    return savedProduct;

  }

  async findAll(): Promise<Product[]> {
    return this.ProductModel.find().exec();
  }

  async findOne(id: any): Promise<Product> {
  return this.ProductModel.findOne({ _id: id }).exec();
  }

   update(id: any, updateProductDto: UpdateProductDto) {
    return this.ProductModel.findByIdAndUpdate(id, updateProductDto)
  }

  async remove(id: any) {
    return this.ProductModel.findByIdAndDelete({ _id: id});
  }
}
