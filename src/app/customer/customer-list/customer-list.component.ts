import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Output() myevent=new EventEmitter;
  @Output() deleteevent=new EventEmitter;
  @Output() editevent=new EventEmitter;
  @Input() customerdata!:any

  public toggle=true
  constructor() { }
  toggleForm(){
    this.myevent.emit(this.toggle)
  }
  ngOnInit(): void {
  }
  removeCustomer(id:any){
    this.deleteevent.emit(id)
  }
  toggleFormWithId(id:any){
    this.myevent.emit(this.toggle)
    this.editevent.emit(id)
    
  }

}
