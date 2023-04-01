"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTeacher = void 0;
var teacherA = {
    firstName: 'Julien',
    lastName: 'Barbier',
    fullTimeEmployee: true,
    location: 'San Fransico',
    contract: false,
};
console.log(teacherA);
var directorX = {
    firstName: 'Sir Fred',
    lastName: 'Sir',
    location: 'Rwanda',
    fullTimeEmployee: true,
    numberOfReports: 172,
};
console.log(directorX);
var printTeacher = function (firstName, lastName) { return "".concat(firstName[0], ". ").concat(lastName); };
exports.printTeacher = printTeacher;
console.log((0, exports.printTeacher)('john', 'doe'));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
function createStudent(Pupil, firstName, lastName) {
    return new Pupil(firstName, lastName);
}
var student1 = createStudent(StudentClass, 'Jamie', 'Hull');
console.log(student1);
