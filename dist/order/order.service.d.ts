import { AbstractService } from '../common/abstract.service';
import { Order } from './entity/order.entity';
import { Repository } from 'typeorm';
import { PaginatedResult } from '../common/models/paginated-result.interface';
export declare class OrderService extends AbstractService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
    paginate(page?: number, relations?: any[]): Promise<PaginatedResult>;
    chart(): Promise<any>;
}
