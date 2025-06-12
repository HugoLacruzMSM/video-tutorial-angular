import {Component, effect, signal} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  counter = signal(0)
  normalCounter = 0

  constructor() {
    this.counter.set(5);
    // setTimeout(() => {
    //   // this.normalCounter = 50;
    //   this.counter.set(50)
    //   console.log(this.counter())
    // }, 5000)
    effect(() =>
      console.log(this.counter()));
  }

  onIncrement() {
    this.counter.update((initialValue) => initialValue + 100)

  }
}
