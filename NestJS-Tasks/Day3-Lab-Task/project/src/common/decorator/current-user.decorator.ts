import { createParamDecorator, ExecutionContext } from '@nestjs/common';

type RequestUser = {
  userId?: number;
  email?: string;
  role?: string;
};

type RequestWithUser = {
  user?: RequestUser;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): RequestUser | undefined => {
    const req = ctx.switchToHttp().getRequest<RequestWithUser>();
    return req.user;
  },
);
