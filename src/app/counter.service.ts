import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
    activeToInactiveCounterer = 0;
    inactiveToActiveCounter = 0;

    addActiveToInactiveCounter() {
        this.activeToInactiveCounterer++;
    }
    addInactiveToActiveCounter() {
        this.inactiveToActiveCounter++;
    }
}
