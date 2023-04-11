import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '../common/purchase';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private _purchaseUrl = environment.luv2shopApiUrl + '/checkout/purchase';

  constructor(private httpClient:HttpClient) { }

  placeOrder(purchase:Purchase):Observable<any>{
    return this.httpClient.post<Purchase>(this._purchaseUrl, purchase);
  }
}
