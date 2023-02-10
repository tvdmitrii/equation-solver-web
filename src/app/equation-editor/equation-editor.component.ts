import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-equation-editor',
  templateUrl: './equation-editor.component.html',
  styleUrls: ['./equation-editor.component.css']
})
export class EquationEditorComponent {
  @Input() equationsControl: FormControl = new FormControl({});
  equations: string = '';

  ngOnInit(): void {
    this.equations = "PV = 1000 # $\nr = 0.055 # 5.5%\nFV = 5000 # $\n\nFV = PV*(1 + r)^n";
    this.equationsControl.addValidators(Validators.required);
  }

}
