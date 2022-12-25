export interface StudentDetail {
   id: number;
   givenName: string;
   lastName: string;
   age: number;
   class: number;
}

export interface API_Data {
   data: StudentDetail[];
   success: boolean;
   message: string;
}