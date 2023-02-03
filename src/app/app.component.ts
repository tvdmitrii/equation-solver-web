import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EquationVariable } from './EquationVariable';
import { SettingItem } from './SettingItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  equations: string = "";
  solution: EquationVariable[] = [];
  guessValues: EquationVariable[] = [];
  settingsForm: FormGroup = new FormGroup({});

  sendSolveRequest(){
    console.log("Settings form valid: " + this.settingsForm.valid);
    console.log("Settings form value: " + JSON.stringify(this.settingsForm.value));
  }

}
