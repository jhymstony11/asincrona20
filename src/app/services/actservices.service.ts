import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActservicesService {

  constructor(private http: HttpClient) { }

  //Definir la URL de la API(La base URL estara en environments.ts)
  apiPosts = environment.apiURL+'posts/';

  // Metodo GET para el Interceptor
  getPostAllInterceptor():Observable<any>{
  return this.http.get(this.apiPosts, {observe: 'response'});
  }
}
