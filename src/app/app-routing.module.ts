import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActComponent } from './principal/act/act.component';

const routes: Routes = [
  {path:'',component: ActComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
