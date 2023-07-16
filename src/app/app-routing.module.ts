import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptPageComponent } from './prompt-page/prompt-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'prompt/:category/:step', component: PromptPageComponent },
  { path: 'result', component: ResultPageComponent },
  { path: '**', redirectTo: 'category' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
