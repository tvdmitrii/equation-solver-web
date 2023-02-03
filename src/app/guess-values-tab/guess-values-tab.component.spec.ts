import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessValuesTabComponent } from './guess-values-tab.component';

describe('GuessValuesTabComponent', () => {
  let component: GuessValuesTabComponent;
  let fixture: ComponentFixture<GuessValuesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessValuesTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessValuesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
