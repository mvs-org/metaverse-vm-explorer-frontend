import { NgModule } from '@angular/core'
import { ApolloClientOptions, InMemoryCache, HttpLink as H } from '@apollo/client/core'
import { APOLLO_NAMED_OPTIONS, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { environment } from '../environments/environment'

const uri = environment.graphqlEndpoint
const opennft_uri = 'https://datasource.mvs.org/subgraphs/name/opennft/marketplace'
const genefinance_uri = 'https://datasource.mvs.org/subgraphs/name/genefinance/gene-finance'

export function createDefaultApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  }
}

export function createNamedApollo(httpLink: HttpLink): Record<string, ApolloClientOptions<any>> {
  return {
    opennft: {
      name: 'opennft',
      link: httpLink.create({ uri: opennft_uri }),
      cache: new InMemoryCache(),
    },
    genefinance: {
      name: 'genefinance',
      link: httpLink.create({ uri: genefinance_uri }),
      cache: new InMemoryCache(),
    },
  }
}
@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createDefaultApollo,
      deps: [HttpLink],
    },
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createNamedApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
