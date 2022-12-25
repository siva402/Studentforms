import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './components/students/add-students/add-students.component';
import { EditStudentsComponent } from './components/students/edit-students/edit-students.component';
import { StudentsListComponent } from './components/students/students-list/students-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent
  },
  {
    path: 'students',
    component: StudentsListComponent
  },
  {
    path: 'students/add',
    component: AddStudentsComponent
  },
  {
    path: 'students/edit',
    component: EditStudentsComponent,data:{some:'any'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
