import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';

class DevConfigService {
  getMessage() {
    return 'Dev Config Service';
  }
}

@Module({
  imports: [UserModule, CoursesModule],
  controllers: [AppController],
  providers: [
    AppService,

    // Use Value
    {
      provide: 'APP_NAME',
      useValue: 'ITI Nest App',
    },

    // Use Class
    {
      provide: 'CONFIG_SERVICE',
      useClass: DevConfigService,
    },

    // Use Factory
    {
      provide: 'WELCOME_MESSAGE',
      useFactory: () => 'Welcome to NestJS Project',
    },
  ],
})
export class AppModule {}
