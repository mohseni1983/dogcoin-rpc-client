import { Module } from '@nestjs/common';
import { DogecoreService } from './dogecore.service';
import { DogecoreController } from './dogecore.controller';

@Module({
  providers: [DogecoreService],
  controllers: [DogecoreController]
})
export class DogecoreModule {}
