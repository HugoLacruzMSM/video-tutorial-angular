import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name: string= "Hugo";
  topic : string = "Data";
  img:string = "favicon.ico"

  random ="";

  onSave() {
alert("Data saved")  }

  onChange() {
    alert("Num changed")
  }
}
