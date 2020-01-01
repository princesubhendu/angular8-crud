import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListMaterialComponent } from './list-material/list-material.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { EditMaterialComponent } from './edit-material/edit-material.component';
import {routing} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListMaterialComponent,
    AddMaterialComponent,
    EditMaterialComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }