import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AppDataService {



  constructor(private http: Http) {
  }


  getData() {
    return this.http.get('https://www.mockaroo.com/959bf4b0/download?count=10&key=957188c0')
      .toPromise()
      .then(this.extractData)
      .catch(this.error);
  }


  private extractData(Res: Response) {
    return Res.json() || {};  //Al agregar los 'pipes' se puede devolver en caso de no tener datos, un objeto vacio.
  }
  private error(error: Response) {
    return error;
  }
}
