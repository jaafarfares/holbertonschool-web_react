var student1 = {
    firstName: "john",
    lastName: "smith",
    age: 20,
    location: "gabes"
};
var student2 = {
    firstName: "tom",
    lastName: "..",
    age: 26,
    location: "tunis"
};
var studentsList = [student1, student2];
var table = document.querySelector("#student-table");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    table.appendChild(row);
});
