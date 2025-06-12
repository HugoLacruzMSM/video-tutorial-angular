import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  StructuralDirectiveNgfotVsFotComponent
} from './structural-directive-ngfot-vs-fot/structural-directive-ngfot-vs-fot.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructuralDirectiveNgfotVsFotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'video-tutorial-angular';
}

