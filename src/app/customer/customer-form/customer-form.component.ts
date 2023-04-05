import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit,OnChanges {
@Output() closeevent=new EventEmitter
@Output() addevent=new EventEmitter
@Output() updateevent=new EventEmitter
@Input() editbody:any
condition=true
btn="Submit"

public closeform=false;
  constructor() { }
 
  public customerForm!:FormGroup
  
  ngOnInit(): void {
    this.customerForm=new FormGroup({
      "customername":new FormControl(null,Validators.required),
      "price":new FormControl(null,[Validators.required, Validators.pattern("^[0-9]*$")]),
      "address":new FormControl(null,[Validators.required]),
     
     })
     
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.editbody);
   if(this.editbody){
    this.customerForm.setValue({
      "customername":this.editbody.customername,
      "price":this.editbody.price,
      "address":this.editbody.address,
     
    })
    this.btn="Update"
    this.condition=false
   }
  }
  formClose(){
    this.closeevent.emit(this.closeform)
  }
  addCustomer(){
    this.addevent.emit(this.customerForm.value);
    console.log(this.customerForm.value)
   
    
  }
  updateCustomer(){
    this.updateevent.emit(this.customerForm.value);
  }
}
