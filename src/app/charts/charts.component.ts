import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  displays:any = 'none'
  constructor() { }

  ngOnInit(): void {
  }
  displayaddcontact(){
   if(this.displays == "none"){
    this.displays = "block"
   }else{
    this.displays = "none"
   }
  }

}
