import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataComponent } from './data/data.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"", title:"Home", component:HomeComponent},
  {path:"Dashboard/:id",title:"Dashboard",component:DashboardComponent},
  {path:"Dashboard",title:"Dashboard",component:DashboardComponent},
  
  {path:"Data",title:"Data",component:DataComponent},
  {path:"About",title:"About-us",component:AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
