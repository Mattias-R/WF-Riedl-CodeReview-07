import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TravelService {

constructor(private firebase: AngularFireDatabase) { }
populateForm(customer){
    this.form.setValue(customer);
  }
  
deleteCustomer($key: string){
    this.customerList.remove($key);
  }

customerList: AngularFireList<any>;
form = new FormGroup({
     $key: new FormControl(null),
     fullName: new FormControl('', Validators.required),//We add Validators option and we used required so the user must fill the input
     email: new FormControl(''),// to check if the value inside the input is an email
     mobile: new FormControl(''), // here we put an array because we want the user to fill the input and the input length must be at least 8
     location: new FormControl('')
         });
         getCustomers(){
                 this.customerList = this.firebase.list('customers');
                 return this.customerList.snapshotChanges();
         }

insertCustomer(customer){
                 this.customerList.push({
                         fullName: customer.fullName,
                         email: customer.email,
                         mobile: customer.mobile,
                         location:customer.location
                  });
         }
         updateCustomer(customer){
    this.customerList.update(customer.$key,{
       fullName:  customer.fullName,
        email: customer.email,
        mobile: customer.mobile,
        location:customer.location
    });
  }
}
