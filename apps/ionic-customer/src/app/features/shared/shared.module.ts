import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@Nx-Xplat-NgRx-APIREST-Cluster/ionic';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
