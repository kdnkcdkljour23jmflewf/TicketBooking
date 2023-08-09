import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth/auth.entity';
import { LoginuserModule } from './loginuser/loginuser.module';

@Module({ 
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',  
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      entities: [Auth],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Auth]),
    LoginuserModule],
  controllers: [AppController],
  providers: [AppService],
})
// @Module({
//   imports: [AuthModule],
//   controllers: [AppController],
//   providers: [AppService],
//   exports: [],
// })
export class AppModule {
}
