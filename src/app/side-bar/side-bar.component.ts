import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface SettingItem{
  label: string;
  formControl: FormControl;
}

interface Variable{
  name: string;
  value: number;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  trigMode: string = 'Radians';
  trigModes: string[] = ['Radians', 'Degrees'];

  settingItems: SettingItem[] = [
    {label: 'Tolerance', formControl: new FormControl('1e-8',[Validators.required, 
                    Validators.pattern('[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?')])},
    { label: 'Max Iterations', formControl: new FormControl('0',[Validators.required, 
                    Validators.pattern('[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?')])},
    { label: 'Finite Difference Step', formControl: new FormControl('0.01',[Validators.required, 
                    Validators.pattern('[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?')])},
    { label: 'Rounding Places', formControl: new FormControl('3',[Validators.required, 
                    Validators.pattern('[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?')])}
  ];

  solvedVariables: Variable[] = [
    {name: "a", value: 300},
    {name: "b", value: 14},
    {name: "c", value: -3}
  ];

  getNumErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }
    
    return formControl.hasError('pattern') ? 'Not a valid number' : '';
  }

  ngOnInit(): void {
  }
}
