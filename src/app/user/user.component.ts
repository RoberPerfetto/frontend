import { Component, OnInit } from '@angular/core';

import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserServiceService]
})
export class UserComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

}
