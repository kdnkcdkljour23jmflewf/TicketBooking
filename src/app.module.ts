import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth/auth.entity';
import { LoginuserModule } from './loginuser/loginuser.module';
import { MovieticketModule } from './movieticket/movieticket.module';
import { ConfigModule } from '@nestjs/config';
import typeorm from './config/typeorm';


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
    ConfigModule.forRoot({
      isGlobal:true,
      load:[typeorm],
    }),
    TypeOrmModule.forFeature([Auth]),
    LoginuserModule,
    MovieticketModule],
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
