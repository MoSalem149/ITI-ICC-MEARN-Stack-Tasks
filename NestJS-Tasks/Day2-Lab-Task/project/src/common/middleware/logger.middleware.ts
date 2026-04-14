import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `url : ${req.url} , method : ${req.method}, params: ${JSON.stringify(req?.params)}, status: ${res.statusCode}`,
    );
    next();
  }
}
