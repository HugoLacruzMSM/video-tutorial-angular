import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SignalsComponent} from './signals/signals.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'video-tutorial-angular';
}

