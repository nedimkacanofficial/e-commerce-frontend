import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient:HttpClient) { }

  getProductList(theCategoryId:number): Observable<Product[]>{
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductById(id:number){
    return this.httpClient.get(this.baseUrl+'/'+id);
  }

  createProduct(product:any){
    return this.httpClient.post(this.baseUrl,product);
  }

  updateProduct(id:number,product:any){
    return this.httpClient.put(this.baseUrl+'/'+id,product);
  }

  deleteProduct(id:number){
    return this.httpClient.delete(this.baseUrl+'/'+id);
  }
}
interface GetResponse{
  _embedded:{
    products:Product[];
  }
}
