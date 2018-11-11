import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { throwIfAlreadyLoaded } from '@Nx-Xplat-NgRx-APIREST-Cluster/utils';
import { FooCoreModule } from '@Nx-Xplat-NgRx-APIREST-Cluster/web';

@NgModule({
  imports: [FooCoreModule, IonicModule.forRoot()]
})
export class FooIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: FooIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'FooIonicCoreModule');
  }
}
