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
import { SettingsTabComponent } from './settings-tab/settings-tab.component';
import { SolutionTabComponent } from './solution-tab/solution-tab.component';
import { GuessValuesTabComponent } from './guess-values-tab/guess-values-tab.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SolutionPageComponent } from './solution-page/solution-page.component';
import { AboutPageComponent } from './about-page/about-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    EquationEditorComponent,
    SettingsTabComponent,
    SolutionTabComponent,
    GuessValuesTabComponent,
    SolutionPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CodemirrorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
