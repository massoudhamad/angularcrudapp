import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy,AfterViewInit {

  constructor() { }

  title:string="This is String";

  user={
    name:"Abdul",
    age:30
  }

  date = new Date();

  price:number =245890;
  

  ngOnInit(): void {
    console.log("Home Initilized");
  }

  ngOnDestroy():void{
    console.log("Home is Dstroyed");
  }

  ngAfterViewInit():void{
    console.log("Home view after ini");
  }

}
