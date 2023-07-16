import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromptsService {
  private selections: string[] = []; // Add this line

  constructor(private http: HttpClient) {}

  getPrompts(): Observable<any[]> {
    return this.http.get<any[]>('assets/prompts.json');
  }

  addSelection(selection: string): void {
    // Add this method
    this.selections.push(selection);
  }

  getSelections(): string[] {
    // Add this method
    return this.selections;
  }
}
