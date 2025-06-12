import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
  selector: 'app-structural-directive-ngswitch-vs-switch',
  imports: [
    MatButton,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './structural-directive-ngswitch-vs-switch.component.html',
  styleUrl: './structural-directive-ngswitch-vs-switch.component.scss'
})
export class StructuralDirectiveNgswitchVsSwitchComponent {
  grade: number = 0;

  set(number: number) {
    this.grade = number;
  }
}
