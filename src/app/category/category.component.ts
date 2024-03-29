import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PromptsService } from '../prompts.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: { category: string; image: string }[] = []; // Update this line

  constructor(private router: Router, private promptsService: PromptsService) {}

  ngOnInit(): void {
    this.promptsService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSelect(category: string): void {
    this.promptsService.setMainCategory(category);
    this.router.navigate(['/prompt', category, 'start']);
  }
}
