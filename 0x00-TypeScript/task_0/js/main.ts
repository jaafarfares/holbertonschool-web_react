interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
  }
  const student1: Student = {
      firstName: "john",
      lastName: "smith",
      age: 20,
      location: "gabes"
  };
  
  const student2: Student = {
    firstName: "tom",
    lastName: "..",
    age: 26,
    location: "tunis"
  };
 const studentsList: Student[] = [student1, student2];
 const table = document.querySelector("#student-table");

 studentsList.forEach((student) => {
   const row = document.createElement("tr");
   
   const firstNameCell = document.createElement("td");
   firstNameCell.textContent = student.firstName;
   row.appendChild(firstNameCell);
   
   const locationCell = document.createElement("td");
   locationCell.textContent = student.location;
   row.appendChild(locationCell);
   
   table.appendChild(row);
 });
 
