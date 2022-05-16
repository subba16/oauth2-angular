import { HttpService } from './http.service';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { of } from 'rxjs';
import tokenUrl from '../constants/token';
import { Buffer } from 'buffer';


@Injectable({providedIn: 'root'})
export class AuthService {
    

    constructor(private httpClient: HttpClient, private httpService: HttpService){

    }

    getToken(code:string) {
      const mockUserClient = 'client';
      const mockUserSecret = 'secret'; 

      const basicAuth = `Basic ` + Buffer.from(`${mockUserClient}:${mockUserSecret}`).toString('base64');

      const headers = new HttpHeaders({
        'content-type' : 'application/json',
        'Authorization': basicAuth
      });

      const options = {
        headers :headers
      };
        return this.httpService.doPost(tokenUrl(code), null, options);
      }
     
}