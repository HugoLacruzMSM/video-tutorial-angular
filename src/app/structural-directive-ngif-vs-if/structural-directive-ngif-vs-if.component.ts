import {Component} from '@angular/core';

import {CommonModule, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [
    NgIf,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './structural-directive-ngif-vs-if.component.html',
  styleUrl: './structural-directive-ngif-vs-if.component.scss'
})
export class StructuralDirectiveNgifVsIfComponent {
  isChecked = false
  isInputBox: boolean = true
  input1: string = '';
  input2: string = '';

  onClick() {
    this.isChecked = !this.isChecked;
  }

  showField() {
    this.isInputBox = true
  }

  hideField() {
    this.isInputBox = false

  }

 
}
