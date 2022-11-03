import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeConceptsComponent } from './pipe-concepts.component';

describe('PipeConceptsComponent', () => {
  let component: PipeConceptsComponent;
  let fixture: ComponentFixture<PipeConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeConceptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
