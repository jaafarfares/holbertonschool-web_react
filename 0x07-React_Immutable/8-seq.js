import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const cap = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  let Students = Seq(object)
    .filter((grade) => grade.score > 70)
    .map((student) => {
      const result = {
        ...student,
        firstName: cap(student.firstName),
        lastName: cap(student.lastName),
      };
      return result;
    });

    Students = Students.toJS();

  console.log(Students);
}
