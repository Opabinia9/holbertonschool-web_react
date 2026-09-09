interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

let student1: Student = {firstName: 'jack', lastName: "sparrow", age: 35, location: 'The Sea'}
let student2: Student = {firstName: 'will', lastName: "turner", age: 19, location: 'The Land'}

let studentsList: Array<Student> = [student1, student2]

const table = document.createElement("table");

for (let i = 0; i < studentsList.length; i++) {
  let row = table.insertRow(i);
  row.insertCell(0).innerHTML = studentsList[i].firstName;
  row.insertCell(1).innerHTML = studentsList[i].lastName;
  row.insertCell(2).innerHTML = studentsList[i].age.toString();
  row.insertCell(3).innerHTML = studentsList[i].location;
}

let header = table.createTHead();
let headerRow = header.insertRow(0);
for (let i = 0; i < Object.getOwnPropertyNames(student1).length; i++) {
  headerRow.insertCell(i).innerHTML = Object.getOwnPropertyNames(student1)[i];
}

document.body.append(table);
