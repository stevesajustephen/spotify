import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import typeormConfig from './config/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './test/test.module';

@Module({
  imports: [TypeOrmModule.forRoot({ ...typeormConfig.options }), TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
