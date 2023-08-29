import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private urlBackend = "http://localhost:5001/api/get/personas";

  constructor(private http:HttpClient) { }

  getPersonas():Observable<any>{
    return this.http.get<any>(this.urlBackend);
  }
}
