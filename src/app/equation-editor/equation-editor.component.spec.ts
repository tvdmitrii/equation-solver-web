import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationEditorComponent } from './equation-editor.component';

describe('EquationEditorComponent', () => {
  let component: EquationEditorComponent;
  let fixture: ComponentFixture<EquationEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquationEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
