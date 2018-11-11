import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@Nx-Xplat-NgRx-APIREST-Cluster/web';

@Component({
  selector: 'foo-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
