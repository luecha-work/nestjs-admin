import { User } from '../user/entity/user.entity';
import { JwtPayload } from './models/jwt-payload.interface';
import { UserService } from './../user/user.service';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService, configService: ConfigService) {
    // get token with Bearer
    // super({
    //   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //   ignoreExpiration: false,
    //   secretOrKey: configService.get('JWT_SECRET'),
    // });

    // get token with Cookei
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWTFromCookie,
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  // get token with Cookei
  private static extractJWTFromCookie(req: Request): string | null {
    if (req.cookies && req.cookies.access_token) {
      return req.cookies.access_token;
    }
    return null;
  }

  async validate(payload: JwtPayload) {
    console.log('payload: ', payload);

    const { id } = payload;
    const user: User = await this.userService.findOne({ id });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
