import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './module/student-form/student-form.component';
import { StudentlistComponent } from './module/studentlist/studentlist.component';

const routes: Routes = [
  {path:'student-form', component:StudentFormComponent},
  {
    path:'studentlist',component:StudentlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
