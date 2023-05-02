/** interface */
interface Teacher {
    firstName: string
    lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [propName: string]: any;
  }
  

  interface Directors extends Teacher {
    numberOfReports: number
  }

  function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]} ${lastName}`;
  }

  interface Student {
    firstName: string;
    lastName: string;
  }
  
  interface StudentClassInterface {
    new(firstName: string, lastName: string): StudentClass;
  }
  
class StudentClass implements Student {
  public firstName: string; 
  public lastName: string;


  public constructor(firstName: string, lastName: string)
  {
this.firstName = firstName;
this.lastName = lastName;

  }
  public  workOnHomework(): string {
    return "Currently working";
  }
  public displayName(): string {
    return this.firstName;
  }
 }
