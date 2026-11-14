import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { VoitureModule } from './voiture/voiture.module.js';

@Module({
  imports: [VoitureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
