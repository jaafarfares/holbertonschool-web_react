import { Seq } from 'immutable';

export default function printBestStudents(object) {
    const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const students = Seq(object)
      .filter((grade) => grade.score > 70)
      .map((student) => ({
        ...student,
        firstName: cap(student.firstName),
        lastName: cap(student.lastName),
      }))
      .toJS();
  
    console.log(students);
  }
