import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { AppModule } from './app.module';
import { JWT_COOKIE_NAME } from './auth/auth.constants';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);
  const isProduction = config.get('NODE_ENV') === 'production';

  if (isProduction) {
    app.set('trust proxy', 1);
  }

  app.use(
    session({
      secret: config.getOrThrow<string>('JWT_SECRET'),
      resave: false,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: isProduction,
        sameSite: 'lax',
        maxAge: 15 * 60 * 1000,
      },
    }),
  );

  app.setGlobalPrefix('api');
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: config.getOrThrow<string>('FRONTEND_URL'),
    credentials: true,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Vorn Games API')
    .setDescription('VornGames API: Steam auth, scripts catalog, purchases, support')
    .setVersion('1.0')
    .addCookieAuth(JWT_COOKIE_NAME)
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  const port = config.get<number>('PORT', 3000);
  await app.listen(port);
  console.log(`API listening on port ${port}`);
}

bootstrap().catch((err) => {
  console.error('Failed to start API:', err);
  process.exit(1);
});
