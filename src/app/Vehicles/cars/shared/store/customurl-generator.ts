import { Injectable } from "@angular/core";
import { DefaultHttpUrlGenerator, HttpResourceUrls, Pluralizer } from "@ngrx/data";

@Injectable()
export class CustomurlGenerator extends DefaultHttpUrlGenerator{

  constructor(pluralizer:Pluralizer){
    super(pluralizer)
  }

  protected override getResourceUrls(
    entityName: string,
    // root: string,
    // trailingSlashEndpoints?: boolean
    ): HttpResourceUrls {
      let resourceUrls = this.knownHttpResourceUrls[entityName];
      if(entityName == 'Numberplate'){
        resourceUrls = {
          collectionResourceUrl:'http://localhost:3000/numberPlates/',
          entityResourceUrl:'http://localhost:3000/numberPlates/'
        }
        this.registerHttpResourceUrls({[entityName]: resourceUrls})

      }
      return resourceUrls;

  }
}
