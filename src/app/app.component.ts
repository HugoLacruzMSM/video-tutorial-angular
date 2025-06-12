import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  StructuralDirectiveNgifVsIfComponent
} from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructuralDirectiveNgifVsIfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'video-tutorial-angular';
}

