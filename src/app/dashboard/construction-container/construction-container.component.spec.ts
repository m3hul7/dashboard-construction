import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionContainerComponent } from './construction-container.component';

describe('ConstructionContainerComponent', () => {
  let component: ConstructionContainerComponent;
  let fixture: ComponentFixture<ConstructionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
