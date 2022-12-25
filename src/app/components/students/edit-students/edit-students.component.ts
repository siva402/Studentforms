import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDetail } from 'src/app/models/student-details';
import { StudentDetailsService } from 'src/app/services/student-details.service';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css'],
})
export class EditStudentsComponent implements OnInit {

  editStudentDetails: StudentDetail = {
    id: 0,
    givenName: '',
    lastName: '',
    age: 0,
    class: 0,
  };


  constructor(
    private route: ActivatedRoute,
    private studentDetailsService: StudentDetailsService,private router: Router
  ) {}
  
  ngOnInit(): void {
         
        //  console.log(this.editStudentDetails.id);
        //   this.route.paramMap.subscribe({
        //   next: (params) => {
        //    const id = params.get('id');
        //  console.log(this.editStudentDetails.id);
        //  let iden = this.editStudentDetails.id; 
        //   if(iden)
        //   {console.log(iden);
        //   this.studentDetailsService.getSingleStudent(iden).subscribe({
        //   next: (response) => {
        //     console.log(this.editStudentDetails);
        //    this.editStudentDetails = response;
        this.editStudentDetails.id = this.route.snapshot.params['id'];
         this.editStudentDetails.givenName = this.route.snapshot.params['givenName']; 
         this.editStudentDetails.lastName = this.route.snapshot.params['lastName'];
         this.editStudentDetails.age = this.route.snapshot.params['age'];
         this.editStudentDetails.class = this.route.snapshot.params['class'];
        //  this.editStudentDetails.id = parseInt(this.route.snapshot.params['id']);
        }

  updateStudent()
  { console.log(this.editStudentDetails.id,this.editStudentDetails);

    this.studentDetailsService.updateStudent(this.editStudentDetails.id,this.editStudentDetails).subscribe({
      next: (result) => {
                console.log('DATA SAVED SUCCESSFULL',result);
                this.router.navigate(['students']);
              },
              error: (response) => {
                console.log('DATA SAVE ERROR :: ', response);
              },
            });

  }
  deleteStudent(id:any)
  {
  this.studentDetailsService.deleteStudent(id).subscribe({
    next: (result) => {
      console.log('DATA DELETED SUCCESSFULL',result);
      this.router.navigate(['students']);
    },
    error: (response) => {
      console.log('DATA DELETE ERROR :: ', response);
    },
  });
}}