import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.luv2shopApiUrl + '/products';
  private categoryUrl = environment.luv2shopApiUrl + '/product-category';

  constructor(private httpClient:HttpClient) { }

  getProductListPaginate(thePage:number,thePageSize:number,theCategoryId:number): Observable<GetResponseProducts>{
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
    +`&page=${thePage}&size=${thePageSize}`;
    console.log(`Getting products from ${searchUrl}`)
    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  getProductList(theCategoryId:number): Observable<Product[]>{
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.getProducts(searchUrl);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.getProducts(searchUrl);
  }

  searchProductsPaginate(thePage:number,thePageSize:number,theKeyword:string): Observable<GetResponseProducts>{
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
    +`&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  private getProducts(searchUrl:string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProduct(theProductId: number) {
    const productUrl = this.baseUrl + "/" + theProductId;
    return this.httpClient.get<Product>(productUrl);
  }
}

interface GetResponseProducts{
  _embedded:{
    products:Product[];
  },
  page:{
    size:number,
    totalElements:number,
    totalPages:number,
    number:number
  }
}
interface GetResponseProductCategory{
  _embedded:{
    productCategory:ProductCategory[];
  }
}
