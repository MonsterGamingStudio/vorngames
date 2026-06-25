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
    .setDescription(
      'VornGames storefront API.\n\n' +
        '**Auth:** login via `GET /api/auth/steam`, then use cookie `auth_token` (Authorize button).\n\n' +
        '**Purchases:** require Steam login (`POST /api/scripts/:id/purchase`).\n\n' +
        '**Admin:** endpoints under `admin/*` require `role=admin` or steamId in STEAM_ADMIN_IDS.',
    )
    .setVersion('1.0')
    .addCookieAuth(JWT_COOKIE_NAME, {
      type: 'apiKey',
      in: 'cookie',
      name: JWT_COOKIE_NAME,
      description: 'JWT set after Steam login',
    })
    .addTag('auth', 'Steam OpenID authentication')
    .addTag('scripts', 'Public scripts catalog')
    .addTag('purchases', 'Script purchases and downloads')
    .addTag('profile', 'User profile and achievements')
    .addTag('comments', 'Script comments')
    .addTag('notifications', 'In-app notifications')
    .addTag('support', 'User support tickets')
    .addTag('payments', 'UnitPay donations (game currency)')
    .addTag('admin', 'Admin: users, IP blocks, dashboard')
    .addTag('admin/scripts', 'Admin: scripts CRUD and uploads')
    .addTag('admin/comments', 'Admin: comment moderation')
    .addTag('admin/support', 'Admin: support tickets')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    operationIdFactory: (controllerKey, methodKey) => methodKey,
  });
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  const port = config.get<number>('PORT', 3000);
  await app.listen(port);
  console.log(`API listening on port ${port}`);
}

bootstrap().catch((err) => {
  console.error('Failed to start API:', err);
  process.exit(1);
});
