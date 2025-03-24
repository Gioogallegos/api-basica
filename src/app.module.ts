import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { autosController } from './autos/autos.controller';
import { AutosService } from './autos/autos.service';

@Module({
  imports: [],
  controllers: [AppController, autosController],
  providers: [AppService, AutosService],
})
export class AppModule {}
