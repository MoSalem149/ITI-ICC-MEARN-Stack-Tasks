import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type JwtPayload = {
  userId: number;
  email: string;
  role: string;
};

type RequestWithAuth = {
  headers: {
    authorization?: string;
  };
  user?: JwtPayload;
};

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<RequestWithAuth>();

    const auth = req.headers.authorization;

    if (!auth) {
      throw new ForbiddenException('Invalid token');
    }

    const [type, token] = auth.split(' ');

    if (type !== 'Bearer' || !token) {
      throw new ForbiddenException('Invalid token');
    }

    try {
      const decoded = this.jwtService.verify<JwtPayload>(token, {
        secret: 'this is secret',
      });

      req.user = decoded;
      return true;
    } catch {
      throw new ForbiddenException('Invalid token');
    }
  }
}
