import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private apollo: Apollo,
  ) { }

  comsumeQuery(query: any, variables?: any): QueryRef<any> {
    return this.apollo.watchQuery({
      query: query,
      variables: variables,
    });
  }
}
