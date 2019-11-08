import { Component, OnInit } from '@angular/core';
import { TravelService  } from "../shared/travel.service";
import { FormControl , FormGroup , Validators } from "@angular/forms";



@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  constructor(private TravelService: TravelService) { }
submitted: boolean;
formControls = this.TravelService.form.controls;
showSuccessMessage: boolean;

  ngOnInit() {
  }

onSubmit(){
   this.submitted = true;
   if(this.TravelService.form.valid){
           if(this.TravelService.form.get("$key").value == null ){                    this.TravelService.insertCustomer(this.TravelService.form.value);
       this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
       this.submitted = false;
       this.TravelService.form.reset();// the form will be empty after new record created
         } else {
        this.TravelService.updateCustomer(this.TravelService.form.value);
         }
   }
 }
}