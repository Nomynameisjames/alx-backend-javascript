"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTutors = void 0;
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
var MyTutors = function (firstName, lastName) { return "".concat(firstName[0], ". ").concat(lastName); };
exports.MyTutors = MyTutors;
console.log((0, exports.MyTutors)('john', 'doe'));
var PupilClass = /** @class */ (function () {
    function PupilClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PupilClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    PupilClass.prototype.displayName = function () {
        return this.firstName;
    };
    return PupilClass;
}());
function createStudent(Pupil, firstName, lastName) {
    return new Pupil(firstName, lastName);
}
var student1 = createStudent(PupilClass, 'Jamie', 'Hull');
console.log(student1);
