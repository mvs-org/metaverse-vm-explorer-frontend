import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NbAuthModule } from '@nebular/auth'

import { throwIfAlreadyLoaded } from './module-import-guard'
import {
  AnalyticsService,
  LayoutService,
  SeoService,
  StateService,
} from './utils'

export const NB_CORE_PROVIDERS = [
  AnalyticsService,
  LayoutService,
  SeoService,
  StateService,
]
@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    }
  }
}
