import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';


import { OnlyNumber } from '../app/directives/validation/onlyNumbers';
import { OnlyAlphabets } from '../app/directives/validation/onlyAlphabets';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, MatButtonModule, FormsModule, MatFormFieldModule, 
    MatInputModule, MatCardModule, MatExpansionModule],
  providers:    [ ],
  declarations: [ AppComponent, OnlyNumber, OnlyAlphabets ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
  