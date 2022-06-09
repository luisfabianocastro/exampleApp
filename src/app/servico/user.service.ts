import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public listarUsuarios=[];

  private url = 'https://reqres.in/api/users?page=2';

  constructor(private http: HttpClient ) { }

  buscarTodosUsuarios(): Observable<IUser>{
    return this.http.get<IUser>(this.url);
  }
}
