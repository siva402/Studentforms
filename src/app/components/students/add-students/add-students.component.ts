import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDetail } from 'src/app/models/student-details';
import { StudentDetailsService } from 'src/app/services/student-details.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
  
  addStudentRequest: StudentDetail = {
    id: 0,
    givenName: '',
    lastName: '',
    age: 0,
    class: 0
    };
    

    constructor(private studentDetailsService: StudentDetailsService, private router: Router) {}

    ngOnInit(): void {
  
    }

    addStudent(){
      this.studentDetailsService.addStudent(this.addStudentRequest).subscribe({
        next: (result) => {
          console.log('DATA FETCH SUCCESSFULL',result);
          this.router.navigate(['students']);
        },
        error: (response) => {
          console.log('DATA FETCH ERROR :: ', response);
        },
      });
    }
  }
