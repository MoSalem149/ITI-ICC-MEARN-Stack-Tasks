import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('APP_NAME') private readonly appName: string,
    @Inject('CONFIG_SERVICE')
    private readonly configService: { getMessage: () => string },
    @Inject('WELCOME_MESSAGE') private readonly welcomeMessage: string,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getProvidersTest() {
    return {
      appName: this.appName,
      configMessage: this.configService.getMessage(),
      welcomeMessage: this.welcomeMessage,
    };
  }
}
