import { Component, Input } from '@angular/core';
import { EquationVariable } from '../EquationVariable';

@Component({
  selector: 'app-solution-tab',
  templateUrl: './solution-tab.component.html',
  styleUrls: ['./solution-tab.component.css']
})
export class SolutionTabComponent {
  @Input() solution: EquationVariable[] = [];
}
