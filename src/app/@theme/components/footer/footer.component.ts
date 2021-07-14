import { Component } from '@angular/core'
import { LanguageService } from '../../../services/language.service'

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <div class="row" style="width: 100%">
    <div class="col-md-4 order-2 order-md-0 order-lg-0">
      <div class="created-by">
        Copyright <b><a href="https://mvs.org" target="_blank">Metaverse Foundation</a></b> 2021
      </div>
    </div>
    <div class="col-md-4">
      <div class="socials">
        <a href="https://github.com/mvs-org" target="_blank" class="ion ion-social-github"></a>
        <a href="https://twitter.com/mvs_org" target="_blank" class="ion ion-social-twitter"></a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="language">
        <mat-form-field>
          <mat-label>Language</mat-label>
          <mat-select (selectionChange)="setLanguage($event)" [value]="languageService.currentLanguage()">
            <mat-option *ngFor="let option of languageService.getLanguages()" [value]="option.id">{{option.name}}</mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </div>
  </div>
  `,
})
export class FooterComponent {

  constructor(public languageService: LanguageService) {}

  setLanguage(e: any) {
    this.languageService.set(e.value)
  }

}
