import { Permission } from '../../permission/entity/permission.entity';
export declare class Role {
    id: number;
    name: string;
    permissions: Permission[];
}
