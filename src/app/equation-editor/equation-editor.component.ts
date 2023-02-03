import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equation-editor',
  templateUrl: './equation-editor.component.html',
  styleUrls: ['./equation-editor.component.css']
})
export class EquationEditorComponent {
  @Input() equations: string = "";

  ngOnInit(): void {
    this.equations = "int x = 13";
   }

}
