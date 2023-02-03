import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// I think I do not need to use all of the modules in the future
import { MaterialModule } from '../material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { EquationEditorComponent } from './equation-editor/equation-editor.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SettingsTabComponent } from './settings-tab/settings-tab.component';
import { SolutionTabComponent } from './solution-tab/solution-tab.component';
import { GuessValuesTabComponent } from './guess-values-tab/guess-values-tab.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    EquationEditorComponent,
    SideBarComponent,
    SettingsTabComponent,
    SolutionTabComponent,
    GuessValuesTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
