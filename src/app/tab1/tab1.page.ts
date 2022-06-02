import { Component, OnInit } from '@angular/core';
import { UserService } from '../servico/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(public userService:UserService) {}

  ngOnInit(){
    this.userService.buscarTodosUsuarios().subscribe(dados => {console.log(dados)})
  }

}
