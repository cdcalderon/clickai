import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptPageComponent } from './prompt-page.component';

describe('PromptPageComponent', () => {
  let component: PromptPageComponent;
  let fixture: ComponentFixture<PromptPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromptPageComponent]
    });
    fixture = TestBed.createComponent(PromptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
