import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { StudentDetail } from './models/student-details';
import { StudentDetailsService } from './services/student-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'StudentDetails.Ui';

  students!: StudentDetail[];
  studentEdit?:StudentDetail;
  
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
