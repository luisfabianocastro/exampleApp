import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public listarUsuarios=[];

  private url = '/api/users?page=2';

  constructor(private http: HttpClient ) { }

  buscarTodosUsuarios(){
    return this.http.get(this.url);
  }
}
