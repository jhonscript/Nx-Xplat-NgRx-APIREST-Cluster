import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@Nx-Xplat-NgRx-APIREST-Cluster/utils';
import { ELECTRON_PROVIDERS, ElectronService } from './services';

@NgModule({
  providers: [...ELECTRON_PROVIDERS]
})
export class FooElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: FooElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'FooElectronCoreModule');
  }
}
