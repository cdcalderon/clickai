import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromptsService {
  private selections: { step: string; selection: string }[] = [];

  constructor(private http: HttpClient) {}

  getPrompts(): Observable<any[]> {
    return this.http.get<any[]>('assets/prompts.json');
  }

  addSelection(step: string, selection: string): void {
    const index = this.selections.findIndex((s) => s.step === step);
    if (index >= 0) {
      this.selections[index].selection = selection;
    } else {
      this.selections.push({ step, selection });
    }
  }

  getSelections(): string[] {
    return this.selections.map((s) => s.selection);
  }

  clearSelectionsFrom(step: string): void {
    const index = this.selections.findIndex((s) => s.step === step);
    if (index >= 0) {
      this.selections = this.selections.slice(0, index);
    }
  }

  getPromptsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>('assets/prompts.json').pipe(
      map((categories) => {
        const categoryData = categories.find((c) => c.category === category);
        return categoryData ? categoryData.prompts : [];
      }),
      catchError(() => of([]))
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<any[]>('assets/prompts.json').pipe(
      map((categories) => categories.map((c) => c.category)),
      catchError(() => of([]))
    );
  }
}
