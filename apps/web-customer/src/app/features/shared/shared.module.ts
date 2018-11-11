import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@Nx-Xplat-NgRx-APIREST-Cluster/web';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
