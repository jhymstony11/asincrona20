import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
//Se agrega implements httpinterceptor
export class ActinterceptorsService implements HttpInterceptor{

  constructor(private http:HttpClient) { }

  apiPosts = environment.apiURL+'posts/';

  getPostsAllInterceptor():Observable<any>{
    return this.http.get(this.apiPosts,{observe:'response'})
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Este es el intyerceptor");
    req = req.clone({
      setHeaders:{'Authorization': 'Token de Autorizacion'}
    });
      return next.handle(req);
   }
}

