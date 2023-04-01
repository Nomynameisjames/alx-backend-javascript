interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacherA: Teacher = {
    firstName: 'Julien',
    lastName: 'Barbier',
    fullTimeEmployee: true,
    location: 'San Fransico',
    contract: false,
}

console.log(teacherA);

const directorX: Directors = {
    firstName: 'Sir Fred',
    lastName: 'Sir',
    location: 'Rwanda',
    fullTimeEmployee: true,
    numberOfReports: 172,
  };

console.log(directorX);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const MyTutors: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

console.log(MyTutors('john', 'doe'));

interface StudentClassInterface {
    firstName: string;
    lastName: string;
}

interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface; 
}

class PupilClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

function createStudent(Pupil: StudentClassConstructorInterface, firstName: string, lastName: string): StudentClassInterface {
    return new Pupil(firstName, lastName);
}

const student1 = createStudent(PupilClass, 'Jamie', 'Hull');
console.log(student1);
