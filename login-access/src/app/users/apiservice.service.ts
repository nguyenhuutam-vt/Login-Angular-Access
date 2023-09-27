import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}
  onLogin(obj: any): Observable<any> {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/Jira/CreateUser',
      obj
    );
  }

  onLoginn(obj: any): Observable<any> {
    return this.http.post('https://onlinetestapi.gerasim.in/api/Account', obj);
  }

  //get token
  getToken(){
    return localStorage.getItem('token');
    
  }
}
