import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { VoitureModule } from './voiture/voiture.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [VoitureModule, ConfigModule.forRoot({
      isGlobal: true,
      // Optional: load specific env files based on NODE_ENV
      // envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
