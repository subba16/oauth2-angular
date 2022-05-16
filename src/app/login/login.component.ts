import { Component, OnInit } from '@angular/core';
 import redirecturl from '../constants/redirect';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = redirecturl();
  }

  redirect(){
    window.location.href = redirecturl();
  }

}
