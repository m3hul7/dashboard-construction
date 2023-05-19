import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionPresentationComponent } from './construction-presentation.component';

describe('ConstructionPresentationComponent', () => {
  let component: ConstructionPresentationComponent;
  let fixture: ComponentFixture<ConstructionPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
