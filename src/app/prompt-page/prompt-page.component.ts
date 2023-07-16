import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { PromptsService } from '../prompts.service';

@Component({
  selector: 'app-prompt-page',
  templateUrl: './prompt-page.component.html',
  styleUrls: ['./prompt-page.component.scss'],
})
export class PromptPageComponent implements OnInit {
  currentStep: any;
  category: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private promptsService: PromptsService
  ) {} // Inject Router

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.promptsService
        .getPromptsByCategory(params['category'])
        .subscribe((prompts) => {
          this.currentStep = this.findStepByRoute(prompts, params['step']);
        });
    });
  }

  onSelect(option: any): void {
    this.promptsService.clearSelectionsFrom(this.currentStep.step);
    this.promptsService.addSelection(this.currentStep.step, option.name);
    if (option.options) {
      this.router.navigate(['/prompt', this.category, option.route]);
    } else {
      this.router.navigate(['/result']);
    }
  }

  findStepByRoute(prompts: any[], route: string): any {
    for (const prompt of prompts) {
      if (prompt.step === route) {
        return prompt;
      }
      if (prompt.options) {
        const nestedStep = this.findStepByRoute(prompt.options, route);
        if (nestedStep) {
          return nestedStep;
        }
      }
    }
    return null;
  }
}
