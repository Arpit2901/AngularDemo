import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-com',
  templateUrl: './first-com.component.html',
  styleUrls: ['./first-com.component.css']
})
export class FirstComComponent implements OnInit {

  constructor() { }

  show(name:string){
    alert("this is a function"+name);
  }
  ngOnInit(): void {
  }

}
