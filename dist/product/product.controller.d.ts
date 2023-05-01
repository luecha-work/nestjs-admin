import { ProductService } from './product.service';
import { ProductCreateDto } from './dto/product-create.dto';
import { ProductUpdateDto } from './dto/product-update.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(page?: number): Promise<import("../common/models/paginated-result.interface").PaginatedResult>;
    create(body: ProductCreateDto): Promise<any>;
    get(id: number): Promise<any>;
    update(id: number, body: ProductUpdateDto): Promise<any>;
    delete(id: number): Promise<any>;
}
