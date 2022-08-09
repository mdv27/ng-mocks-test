import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  appConfig = {
    a: 1,
    c: 2
  };

  async getAppConfig() {
    await Promise.resolve();
    return this.appConfig;
  }
}