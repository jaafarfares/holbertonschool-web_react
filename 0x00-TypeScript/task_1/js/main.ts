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

  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
