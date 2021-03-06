import { Component, Input, OnInit } from '@angular/core'
import { Metadata, TokenService } from '../../../../services/token.service'

@Component({
  selector: 'mvs-mit',
  templateUrl: './mit.component.html',
  styleUrls: ['./mit.component.scss'],
})
export class MitComponent {

  @Input()
  token: Metadata

  constructor(private tokenService: TokenService) {
  }

}
