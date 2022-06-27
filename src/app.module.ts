import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtsModule } from './ots/ots.module';

@Module({
  imports: [OtsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
