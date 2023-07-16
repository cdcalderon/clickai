import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromptsService {
  constructor(private http: HttpClient) {}

  getPrompts(): Observable<any[]> {
    return this.http.get<any[]>('assets/prompts.json');
  }
}
