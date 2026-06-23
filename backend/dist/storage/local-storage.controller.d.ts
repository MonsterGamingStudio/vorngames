import { ConfigService } from '@nestjs/config';
import type { Response } from 'express';
export declare class LocalStorageController {
    private readonly config;
    constructor(config: ConfigService);
    serve(key: string, res: Response): void;
}
