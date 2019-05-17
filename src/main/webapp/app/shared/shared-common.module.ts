import { NgModule } from '@angular/core';

import { ScubaDiveLogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ScubaDiveLogSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ScubaDiveLogSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ScubaDiveLogSharedCommonModule {}
