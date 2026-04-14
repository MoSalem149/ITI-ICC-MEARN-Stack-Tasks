import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getProvidersTest(): {
        appName: string;
        configMessage: string;
        welcomeMessage: string;
    };
}
