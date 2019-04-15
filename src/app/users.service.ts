import { Injectable } from '@angular/core';
import { User } from './users.model';
import { CounterService } from './counter.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
    users: User[] = [
        new User('Paula', true),
        new User('Angelo', false),
        new User('Francesca', false),
        new User('Miguel', true)
    ];

    constructor(private counterService: CounterService) { }

    setActive(userToActivate: User) {
        this.users.find(user => user.name == userToActivate.name).isActive = true;
        this.counterService.addInactiveToActiveCounter();
    }

    setInactive(userToInactivate: User) {
        this.users.find(user => user.name === userToInactivate.name).isActive = false;
        this.counterService.addActiveToInactiveCounter();
    }

    getActiveUsers() {
        return this.users.filter(user => user.isActive === true);
    }

    getInactiveUsers() {
        return this.users.filter(user => user.isActive === false);
    }
}