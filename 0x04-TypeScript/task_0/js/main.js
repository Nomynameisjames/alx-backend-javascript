var studentA = {
    firstName: 'Adava',
    lastName: 'Onimisi',
    age: 27,
    location: 'London',
};
var studentB = {
    firstName: 'Gaby',
    lastName: 'Sifeuntes',
    age: 30,
    location: 'Denver',
};
var studentsList = [studentA, studentB];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "brown";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    //creating a cell in the table
    var NameCell = document.createElement('td');
    var LocationCell = document.createElement('td');
    // appending the student name and location to the created row element
    NameCell.textContent = student.firstName;
    LocationCell.textContent = student.location;
    // adding border styling to the newly created table 
    NameCell.style.border = "1px solid black";
    LocationCell.style.border = "1px solid black";
    row.appendChild(NameCell);
    row.appendChild(LocationCell);
    tbody.appendChild(row);
});
// append the newly created table to the DOM
document.body.appendChild(table);
