import { Component, OnInit } from '@angular/core';
import { PromptsService } from '../prompts.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss'],
})
export class ResultPageComponent implements OnInit {
  selections: string[] = [];

  constructor(private promptsService: PromptsService) {}

  ngOnInit(): void {
    this.selections = this.promptsService.getSelections();
  }
}
