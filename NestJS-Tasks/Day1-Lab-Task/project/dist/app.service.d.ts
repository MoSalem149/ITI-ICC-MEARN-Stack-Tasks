export declare class AppService {
    private readonly appName;
    private readonly configService;
    private readonly welcomeMessage;
    constructor(appName: string, configService: {
        getMessage: () => string;
    }, welcomeMessage: string);
    getHello(): string;
    getProvidersTest(): {
        appName: string;
        configMessage: string;
        welcomeMessage: string;
    };
}
