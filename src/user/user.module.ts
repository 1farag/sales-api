// import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
// import { UserService } from './user.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserRepository } from './user.repository';
// import { UserEntity } from './user.entity/user.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([UserEntity])],
//   providers: [UserService, UserRepository],
//   controllers: [UserController],
//   exports: [UserService],
// })
// export class UserModule {}
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
