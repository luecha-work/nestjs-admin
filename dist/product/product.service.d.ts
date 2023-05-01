import { AbstractService } from '../common/abstract.service';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
export declare class ProductService extends AbstractService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
}
