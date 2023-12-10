import { Injectable } from '@nestjs/common';
import type { User } from '#types';

@Injectable()
export class AppService {
  readOneUser(): User {
    return {
      name: 'Evyatar',
      age: 19,
      isCool: true,
    };
  }
}
