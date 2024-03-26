import { Injectable } from '@angular/core';
import { OpenAPIClientService } from 'openapi-fetch-angular';
import { paths } from './testapi.swagger';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TestAPIService extends OpenAPIClientService<paths> {
  constructor(httpClient: HttpClient) {
    super(httpClient, {
      baseUrl: '/api',
    });
  }
}
