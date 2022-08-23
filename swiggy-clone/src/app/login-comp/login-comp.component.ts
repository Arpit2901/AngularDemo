import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  
  constructor() { }
  show(){
  let name=document.getElementsByClassName('locate-me');
  alert("You are from"+ name)
}
  ngOnInit(): void {
  }

}
