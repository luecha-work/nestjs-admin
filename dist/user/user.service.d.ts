import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { AbstractService } from '../common/abstract.service';
import { PaginatedResult } from '../common/models/paginated-result.interface';
export declare class UserService extends AbstractService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    paginate(page?: number, relations?: any[]): Promise<PaginatedResult>;
}
