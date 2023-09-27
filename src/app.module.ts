import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ReportsController } from './reports/reports.controller';
import { setupSwagger } from 'swagger.config';

@Module({
  imports: [],
  controllers: [AppController, UsersController, ReportsController],
  providers: [AppService],
})
export class AppModule {
}
