import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    {
      name: "Abdul",
      department: 30,
      active: true
    },
    {
     name: "Juma",
      department: 30,
     active: false
    },
  {
  name: "Asha",
    department: 30,
  active: true
}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  viewuser(data:any)
  {
    console.log(data);
  }

}
