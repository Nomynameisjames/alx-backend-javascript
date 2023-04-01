interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentA: Student = {
    firstName: 'Adava',
    lastName: 'Onimisi',
    age: 27,
    location: 'London',
};
const studentB: Student = {
    firstName: 'Gaby',
    lastName: 'Sifeuntes',
    age: 30,
    location: 'Denver',
};

const studentsList: Student[] = [studentA, studentB];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "brown";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');
    
    //creating a cell in the table

    const NameCell = document.createElement('td');
    const LocationCell = document.createElement('td');
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
