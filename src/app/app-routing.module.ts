import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptPageComponent } from './prompt-page/prompt-page.component';
import { ResultPageComponent } from './result-page/result-page.component'; // Import ResultPageComponent

const routes: Routes = [
  { path: 'prompt/:step', component: PromptPageComponent },
  { path: 'result', component: ResultPageComponent }, // Add this line
  { path: '**', redirectTo: 'prompt/start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
