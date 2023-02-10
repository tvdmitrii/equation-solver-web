import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EquationVariable } from '../EquationVariable';
import { SolutionResponse } from '../SolutionResponse';

@Component({
  selector: 'app-solution-page',
  templateUrl: './solution-page.component.html',
  styleUrls: ['./solution-page.component.css']
})
export class SolutionPageComponent {

  constructor(private _snackBar: MatSnackBar, private http: HttpClient){}

  private solutionRequestURL = 'http://localhost:5000/api/solution_request';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  solution: EquationVariable[] = [];

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
      let mainFormData = JSON.stringify(this.mainForm.value);
      this.http.post<SolutionResponse>(this.solutionRequestURL, mainFormData, this.httpOptions).
      subscribe(result => this.processResult(result));
    } else{
      this.openSnackBar('Error: Some fields are incomplete!');
    }
  }

  openSnackBar(content: string) {
    this._snackBar.open(content, 'Dismiss', {
      verticalPosition: 'top',
    });
  }

  processResult(result: SolutionResponse){

    this.solution = [];
    for(const name in this.guessValuesForm.controls){
      this.guessValuesForm.removeControl(name);
    }

    for (const key in result.guess_values){
      this.guessValuesForm.addControl(key, new FormControl(result.guess_values[key], [Validators.required, Validators.pattern('-?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?')]));
    }

    if (result.success){
      this.openSnackBar("Solution was successful!");
      for (const key in result.solution){
        this.solution.push({name: key, value: result.solution[key]});
      }
    } else {
      this.openSnackBar("There was an error: " + result.error);
    }
  }

}
