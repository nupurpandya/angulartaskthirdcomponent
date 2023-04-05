import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerdata: any;
  editbody: any;
  // deleteddata: any;
  id:any

  constructor(private service:CustomerService) { }
public toggleForm:boolean=false;
  ngOnInit(): void {
    this.getCustomer();
  }
  toggle(data:boolean){
    this.toggleForm=data
  }
  closeForm(data:boolean){
    this.toggleForm=data
  }
  getCustomer(){
    this.service.getCustomer().subscribe(res=>this.customerdata=res)
  }
  deleteCustomer(id:any){
    this.service.delCustomer(id).subscribe(res=>res)
    this.getCustomer()
  }
  addCustomer(body:any){
    this.service.addCustomer(body).subscribe(res=>res);
    this.getCustomer()
    
  }
  editCustomer(id:any){
    this.id=id
    this.service.getCustomerById(id).subscribe(res=>this.editbody=res)
  }
  updateCustomer(body:any){
    this.service.updateCustomer(this.id,body).subscribe(res=>res)
    this.getCustomer()
  }
}
