import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Copyright <b><a href="https://mvs.org" target="_blank">Metaverse Foundation</a></b> 2021
    </span>
    <div class="socials">
      <a href="https://github.com/mvs-org" target="_blank" class="ion ion-social-github"></a>
      <a href="https://twitter.com/mvs_org" target="_blank" class="ion ion-social-twitter"></a>
    </div>
  `,
})
export class FooterComponent {
}
