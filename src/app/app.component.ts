import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [CounterService]
})
export class AppComponent {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor(private counterService: CounterService) { }

  ngDoCheck() {
    this.activeToInactiveCounter = this.counterService.activeToInactiveCounterer;
    this.inactiveToActiveCounter = this.counterService.inactiveToActiveCounter;
  }
}
