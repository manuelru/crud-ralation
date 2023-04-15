import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'CMrrjmrr09.',
      database: 'db-relation-tables',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      
    }),
   UsersModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
