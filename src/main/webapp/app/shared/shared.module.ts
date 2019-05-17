import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScubaDiveLogSharedLibsModule, ScubaDiveLogSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ScubaDiveLogSharedLibsModule, ScubaDiveLogSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ScubaDiveLogSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScubaDiveLogSharedModule {
  static forRoot() {
    return {
      ngModule: ScubaDiveLogSharedModule
    };
  }
}
