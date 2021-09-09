import { NgModule } from '@angular/core'
import { NbButtonModule, NbCardModule } from '@nebular/theme'

import { ThemeModule } from '../../@theme/theme.module'
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module'
import { MiscellaneousComponent } from './miscellaneous.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    TranslateModule.forChild(),
    MiscellaneousRoutingModule,
  ],
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent,
  ],
})
export class MiscellaneousModule { }
