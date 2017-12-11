import {Injectable} from '@angular/core';

@Injectable()
export class TestService {

  constructor() {
  }

  public static add(a: number, b: number): number {
    return a + b;
  }

}
