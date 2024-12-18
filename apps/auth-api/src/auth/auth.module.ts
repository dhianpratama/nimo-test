import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@nimo/entities';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity])],
	controllers: [AuthController],
	providers: [AuthService]
})
export class AuthModule {}
