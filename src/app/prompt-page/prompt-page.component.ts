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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private promptsService: PromptsService
  ) {} // Inject Router

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.promptsService.getPrompts().subscribe((prompts) => {
        this.currentStep = prompts.find(
          (prompt) => prompt.step === params['step']
        );
      });
    });
  }

  onSelect(option: any): void {
    // Add this method
    this.promptsService.addSelection(option.name);
    if (option.options) {
      this.router.navigate(['/prompt', option.route]);
    } else {
      this.router.navigate(['/result']);
    }
  }
}
