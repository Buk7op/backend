import { Injectable, ɵinternalCreateApplication } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://identityserver:8081/identity/"
  private baseUrlApi: string = "https://mainapp:8083/"
  constructor(private http: HttpClient) { }


  doSomething(token: string) {
    return this.http.get<any>(`${this.baseUrlApi}weatherforecast`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      })
    },)
  }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}create`, userObj)
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}login`, loginObj)
  }
}
