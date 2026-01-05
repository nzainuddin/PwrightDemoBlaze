import { APIRequestContext, expect } from '@playwright/test';
import { BaseApi } from './base.api';

export class ControllerApi extends BaseApi {

async getByCategory(category: string) {
    const response = await this.execute({
      method: 'POST',
      url: '/bycat',
      data: { "cat": category },
    });
    expect(response.status()).toBe(200);
    console.log('Category Response:', await response.json());
    return response.json();
  }
}