import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsListComponent } from './components/students/students-list/students-list.component';
import { AddStudentsComponent } from './components/students/add-students/add-students.component';
import { FormsModule } from '@angular/forms';
import { EditStudentsComponent } from './components/students/edit-students/edit-students.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    AddStudentsComponent,
    EditStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
