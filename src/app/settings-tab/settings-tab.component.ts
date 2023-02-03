import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingItem } from '../SettingItem';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.component.html',
  styleUrls: ['./settings-tab.component.css']
})
export class SettingsTabComponent {
  settings: SettingItem[] = [
    {name: 'Trigonometry Mode', type: 'select', defaultValue: 'Radians', options: ['Radians', 'Degrees']},
    {name: 'Tolerance', type: 'number', defaultValue: '1e-8'},
    {name: 'Max Iterations', type: 'number', defaultValue: '0'},
    {name: 'Finite Difference Step', type: 'number', defaultValue: '0.01'},
    {name: 'Rounding Places', type: 'number', defaultValue: '3'}
  ];

  @Input() settingsForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    for (let settingItem of this.settings) {
      console.log(settingItem.name);
      let formControl = new FormControl(settingItem.defaultValue, [Validators.required]);
      if (settingItem.type == 'number') {
        formControl.addValidators(Validators.pattern('[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?'));
      }
      this.settingsForm.addControl(settingItem.name, formControl);
    }
  }
}
