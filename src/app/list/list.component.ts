import { Component, OnInit } from '@angular/core';
import { TravelService } from "../shared/travel.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 customerArray =[];
 showDeletedMessage : boolean;

 constructor(private TravelService: TravelService) { }

 ngOnInit() {
         this.TravelService.getCustomers().subscribe(
                 (list) => {
                         this.customerArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
 }
 onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
        this.TravelService.deleteCustomer($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }
}