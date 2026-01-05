import { APIRequestContext, expect } from '@playwright/test';

export class BaseApi {
//   protected readonly authHeader: Record<string, string>;

  constructor(
    protected request: APIRequestContext, 
    // protected baseURL: string,
    protected baseURL: 'https://api.demoblaze.com',
    // private username: string, 
    // private password: string
  ) {
    // const authBase64 = Buffer.from(`${username}:${password}`).toString('base64');
    // this.authHeader = { 'authorization': `Basic ${authBase64}` };
  }

  protected async execute({ method, url, data, customHeaders = {}/*, useAuth = true*/ }: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: any,
    customHeaders?: Record<string, string>,
    useAuth?: boolean
  }) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    //   ...(useAuth ? this.authHeader : {}),
      ...customHeaders
    };

    const requestOptions = { headers: headers, data: data };
    console.log('Full URL:', this.baseURL + url);
    switch (method) {
      case 'GET':    return await this.request.get(this.baseURL + url, requestOptions);
      case 'POST':   return await this.request.post(this.baseURL + url, requestOptions);
      case 'PUT':    return await this.request.put(this.baseURL + url, requestOptions);
      case 'DELETE': return await this.request.delete(this.baseURL + url, requestOptions);
    }
  }

  
}