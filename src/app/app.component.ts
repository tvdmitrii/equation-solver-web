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
  solution: EquationVariable[] = [
    {name: "a", value: 300},
    {name: "b", value: 200},
    {name: "c", value: -3}
    ];

  settingsForm: FormGroup = new FormGroup({});
  guessValuesForm: FormGroup = new FormGroup({});
  equationsControl: FormControl = new FormControl({});
  mainForm: FormGroup = new FormGroup({
    settingsForm: this.settingsForm,
    guessValuesForm: this.guessValuesForm,
    equationsControl: this.equationsControl
  });

  sendSolveRequest(){
    if (this.mainForm.valid){
      console.log("Settings form value: " + JSON.stringify(this.mainForm.value));
    } else{
      console.log("Form incomplete!");
    }
  }
}
