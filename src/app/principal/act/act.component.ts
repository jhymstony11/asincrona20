import { Component } from '@angular/core';
import {ActinterceptorsService } from 'src/app/services/actinterceptors.service';

@Component({
  selector: 'app-act',
  templateUrl: './act.component.html',
  styleUrls: ['./act.component.css']
})
export class ActComponent {

  constructor(private postsService: ActinterceptorsService){}

  posts = new Array();

  ngOnInit(){
    //Ejecutar el metodo getPostsAllInterceptor
    this.postsService.getPostsAllInterceptor().subscribe({
    
      next: (response: any)=> {
        this.posts= response.body;
        console.log(response);
      },
      error :(e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")

    });

  }

}
