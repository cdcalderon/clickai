import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromptPageComponent } from './prompt-page/prompt-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

@NgModule({
  declarations: [AppComponent, PromptPageComponent, ResultPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
