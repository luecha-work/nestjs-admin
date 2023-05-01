import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { AuthService } from '../auth/auth.service';
import { Request } from 'express';
export declare class UserController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    all(page: number, user: User): Promise<import("../common/models/paginated-result.interface").PaginatedResult>;
    create(body: UserCreateDto): Promise<User>;
    get(id: number): Promise<any>;
    updateInfo(request: Request, body: UserUpdateDto): Promise<any>;
    updatePassword(request: Request, password: string, password_confirm: string): Promise<any>;
    update(id: number, body: UserUpdateDto): Promise<any>;
    delete(id: number): Promise<any>;
}
