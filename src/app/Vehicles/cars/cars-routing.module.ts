import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarHomeComponent } from './numberplate-home/numberplate-home.component';
import { EditNumberplateComponent } from './edit-numberplate/edit-numberplate.component';

const routes:Routes = [{
  path:'',
  component:CarHomeComponent},
  {path:'edit/:id',component:EditNumberplateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
