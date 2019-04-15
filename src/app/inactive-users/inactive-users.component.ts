import { Component, OnInit, DoCheck } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../users.model';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit, DoCheck {
  users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    //this.users = this.usersService.getInactiveUsers();
  }

  ngDoCheck() {
    this.users = this.usersService.getInactiveUsers();
  }

  onChangeStatus(user: User) {
    this.usersService.setActive(user);

  }
}
