import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user.Entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'studentDB',
      entities: [User], // Add your entities here
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]), // Make the User entity available for injection
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
