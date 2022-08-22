import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BHAVNACORP';
  isvalid:boolean=true;
  changedata(valid:boolean)
  {
    this.isvalid=valid;
  }
  student:any[]=[
    {ID:101,Name:'Arpit',Branch:'CSE',Gender:'MAle'},
    {ID:102,Name:'yash',Branch:'CSE',Gender:'MAle'},
    {ID:103,Name:'NAina',Branch:'CSE',Gender:'FEMAle'},
    {ID:104,Name:'Abhay',Branch:'CSE',Gender:'MAle'},
    {ID:105,Name:'Mohit',Branch:'CSE',Gender:'FEMAle'},

  ]
 
}
