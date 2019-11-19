import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Product{
  constructor(
    public name:string,
    public code:string,
    public category:string,
    public unit:string,
    public purchaserate:string,
    public salesrate:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     

     getProducts()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log("test call");
    return this.httpClient.get<Product[]>('http://172.16.5.195/crud_api/list',{headers});
  }

  public deleteProducts(product) {
    return this.httpClient.delete<Product>("http://172.16.5.195/crud_api" + "/"+ product.productID);
  }

  public createProduct(product) {
    return this.httpClient.post<Product>("http://172.16.5.195/crud_api/store", product);
  }



getHeaders(){
  let username='admin'
  let password='password'

  let  basicString='Basic '+window.btoa(username + ':' + password)
  return basicString;
}

}