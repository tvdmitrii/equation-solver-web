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
    this.equations = 'int x = 13';
    this.equationsControl.addValidators(Validators.required);
  }

}
