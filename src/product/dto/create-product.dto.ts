export class CreateProductDto {
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    length: number;
    width: number;
    stock: number;
    qrcode: string;
    createdAt: Date;
}
