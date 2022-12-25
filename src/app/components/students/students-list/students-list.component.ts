import { Component, OnInit } from '@angular/core';
import { StudentDetail } from 'src/app/models/student-details';
import { StudentDetailsService } from 'src/app/services/student-details.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit {

  students!: StudentDetail[];

  constructor(private studentDetailsService: StudentDetailsService) {}

  ngOnInit(): void {
     this.getStudent();
  }
  
  getStudent(){
    this.studentDetailsService.getStudentDetail().subscribe({
      next: (result) => {
        console.log('DATA FETCH SUCCESSFULL',result);
        this.students = result.data;
      },
      error: (response) => {
        console.log('DATA FETCH ERROR :: ', response);
      },
    });
  }
    
    
}
