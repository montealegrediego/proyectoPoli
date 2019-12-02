import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoPoli';

  getDepth(outlet: RouterOutlet) {
    return outlet.activatedRouteData.depth;
  }
}
