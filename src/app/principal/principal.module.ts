import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActComponent } from './act/act.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    ActComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  exports:[
    ActComponent
  ]
})
export class PrincipalModule { }
