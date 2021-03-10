import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  value = ''

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  isAddress(address: string){
    return /0x[a-fA-F0-9]{40}/.test(address)
  }

  showAddress(value: string){
    this.router.navigateByUrl('/address/'+value)
  }

}
