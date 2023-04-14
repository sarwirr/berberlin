import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    _id;

    @Prop()name: string;
    @Prop()description: string;
    @Prop()price: number;
    @Prop()image: string;
    @Prop()category: string;
    @Prop()length: number;
    @Prop()width: number;
    @Prop()stock: number;
    @Prop()qrcode: string;
    @Prop()createdAt: Date;
    
}

export const ProductSchema = SchemaFactory.createForClass(Product);
