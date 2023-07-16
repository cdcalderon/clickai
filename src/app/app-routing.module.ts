import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptPageComponent } from './prompt-page/prompt-page.component';

const routes: Routes = [
  { path: 'prompt/:step', component: PromptPageComponent },
  { path: '**', redirectTo: 'prompt/start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
