import { Injectable } from '@angular/core';
import { API_Data,StudentDetail } from '../models/student-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class StudentDetailsService {

  API_Link = "https://localhost:7202/api/controller/";

  constructor(private httpClient: HttpClient) {}

  public getStudentDetail() {
    return this.httpClient.get<API_Data>(this.API_Link + 'GetAll');
  }
  
  public addStudent(addStudentRequest: StudentDetail)
  {
    return this.httpClient.post<StudentDetail>(this.API_Link + 'Add',addStudentRequest);
  }

  public getSingleStudent(id: number):Observable<StudentDetail>
  {  console.log("id "+id)
  console.log("type of id "+typeof(id));  
    return this.httpClient.get<StudentDetail>(this.API_Link + id);
  }

  public updateStudent(id:any,data:StudentDetail):Observable<StudentDetail>{
    console.log("id "+id)
    console.log("type of id "+typeof(id));
    console.log("data "+data);
    console.log("type of data "+typeof(data));
    
    return this.httpClient.put<StudentDetail>(this.API_Link + `${id}`,data);
  }
  public deleteStudent(id: any){
    return this.httpClient.delete<StudentDetail>(this.API_Link + id);
  }
}
