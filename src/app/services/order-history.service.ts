import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderHistory } from '../common/order-history';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderUrl = environment.luv2shopApiUrl + '/orders';

  constructor(private httpClient:HttpClient) { }

  getOrderHistory(emailAddress:string): Observable<GetResponseOrderHistory>{
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${emailAddress}`;
    return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl);
  }
}
interface GetResponseOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  }
}
