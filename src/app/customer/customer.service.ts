import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url= "http://localhost:3000/customer";
  constructor(private http:HttpClient) { }
  getCustomer(){
    return this.http.get(this.url);
  }
  delCustomer(id:Customer){
    return this.http.delete(this.url+"/"+id)
  }
  addCustomer(body:any){
    return this.http.post(this.url,body)
  }
  getCustomerById(id:any){
    return this.http.get(this.url+"/"+id)
  }
  updateCustomer(id:any,body:any){
    return this.http.put(this.url+"/"+id,body)
  }
}
