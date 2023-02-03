import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTabComponent } from './solution-tab.component';

describe('SolutionTabComponent', () => {
  let component: SolutionTabComponent;
  let fixture: ComponentFixture<SolutionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
