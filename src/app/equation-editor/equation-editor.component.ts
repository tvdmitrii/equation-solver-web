import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equation-editor',
  templateUrl: './equation-editor.component.html',
  styleUrls: ['./equation-editor.component.css']
})
export class EquationEditorComponent {
  @Input() content?: string;

  ngOnInit(): void {

    this.content = "int x = 13";
   }

}
