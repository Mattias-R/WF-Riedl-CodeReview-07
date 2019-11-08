import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BlogComponent} from  './blog/blog.component';
import { TravelComponent} from  './travel/travel.component';
import { LucernComponent} from  './lucern/lucern.component';
import { MunichComponent} from  './munich/munich.component';
import { ZurichComponent} from  './zurich/zurich.component';
import { KeniaComponent} from  './kenia/kenia.component';
import { BangkokComponent} from  './bangkok/bangkok.component';
import { ViennaComponent} from  './vienna/vienna.component';


const routes: Routes = [

{
        path:"",component: HomeComponent
},
{
        path: "blog",component: BlogComponent
},{
		path:"travel",component: TravelComponent
},{
		path:"lucern",component: LucernComponent
},{
		path:"munich",component: MunichComponent
},{
		path:"zurich",component: ZurichComponent
},{
		path:"kenia",component: KeniaComponent
},{
		path:"bangkok",component: BangkokComponent
},{
		path:"vienna",component: ViennaComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
