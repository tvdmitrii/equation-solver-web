import { Component, Input } from '@angular/core';
import { EquationVariable } from '../EquationVariable';

@Component({
  selector: 'app-guess-values-tab',
  templateUrl: './guess-values-tab.component.html',
  styleUrls: ['./guess-values-tab.component.css']
})
export class GuessValuesTabComponent {
  @Input() guessValues: EquationVariable[] = [];
}
