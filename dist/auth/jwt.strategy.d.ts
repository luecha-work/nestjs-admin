import { User } from '../user/entity/user.entity';
import { JwtPayload } from './models/jwt-payload.interface';
import { UserService } from './../user/user.service';
import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService, configService: ConfigService);
    private static extractJWTFromCookie;
    validate(payload: JwtPayload): Promise<User>;
}
export {};
