import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../users.model';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit, DoCheck {
  users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {

  }

  ngDoCheck() {
    this.users = this.usersService.getActiveUsers();
  }

  onChangeStatus(user: User) {
    this.usersService.setInactive(user);
  }



}
