import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogecoreModule } from './dogecore/dogecore.module';

@Module({
  imports: [DogecoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
