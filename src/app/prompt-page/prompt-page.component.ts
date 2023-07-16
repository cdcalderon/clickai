import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromptsService } from '../prompts.service';

@Component({
  selector: 'app-prompt-page',
  templateUrl: './prompt-page.component.html',
  styleUrls: ['./prompt-page.component.scss'],
})
export class PromptPageComponent implements OnInit {
  currentStep: any;

  constructor(
    private route: ActivatedRoute,
    private promptsService: PromptsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.promptsService.getPrompts().subscribe((prompts) => {
        this.currentStep = prompts.find(
          (prompt) => prompt.step === params['step']
        );
      });
    });
  }
}
