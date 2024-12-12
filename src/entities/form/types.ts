import { z } from 'zod';
import { CreateUserFast } from './schema';

export type TUserFastRequest = z.infer<typeof CreateUserFast>;
