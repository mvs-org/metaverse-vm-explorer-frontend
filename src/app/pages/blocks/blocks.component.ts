import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular'

@Component({
  selector: 'ngx-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  blocks: any[]
  loading = true
  error: any

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .query({
        query: gql`
          {
            blocks {
              hash
              number
              timestamp
            }
          }
        `,
      })
      .subscribe((result: any) => {
        this.blocks = result?.data?.blocks;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

}
