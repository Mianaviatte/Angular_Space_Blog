import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";

export interface ClientOptions {
  body?: any;
  headers?: | HttpHeaders | {
    [header: string]: string | string[];
  };
  params?: | HttpParams | {
    [param: string]: any | any[];
  };
  responseType?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getUrl = 'https://api.spaceflightnewsapi.net/v4/articles'

  constructor(private readonly http: HttpClient,) { }

  get(options: ClientOptions = { }): Observable<any> {
    return this.http.get(this.getUrl, options);
  }
}
