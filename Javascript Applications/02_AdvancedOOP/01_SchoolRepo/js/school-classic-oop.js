function School(name, town, classes){
    this.name = name;
    this.town = town;
    this.classes = [];
    
    for (var i = 0; i < classes.length; i++) {
        this.classes[i] = classes[i];
	};
}

function SchoolClass(name, capacity, formTeacher, students){
	this.name = name;
	this.capacity = capacity;
	this.formTeacher = formTeacher;
	this.students = [];

	for (var i = 0; i < students.length; i++) {
		this.students[i] = students[i];
	};
}

SchoolClass.prototype.addStudent = function(student){
	if (this.students.length >= this.capacity) {
		throw "Class capacity filled";
	};

	this.students.push(student);
}

/**
 * [Person Base class for teachers and students, hodling name]
 * @param {[type]} fname [First Name]
 * @param {[type]} lname [Last Name]
 */
function Person(fname, lname){
	this.fname = fname;
	this.lname = lname;
}

Person.prototype.getFullName = function(){
	var fullName = this.fname + " " + this.lname;
	return fullName;
}

Person.prototype.introduce = function(){
	var introduce = "Why, hello there! Me name thay be " + this.getFullName();
	return introduce;
}

/**
 * [Student Inherits Person, adding grade]
 * @param {[type]} fname [First Name]
 * @param {[type]} lname [Last Name]
 * @param {[type]} grade [Grade]
 */
function Student(fname, lname, grade){
	this.grade = grade;

	Person.apply(this, arguments);
	Person.call(this, fname, lname);
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

Student.prototype.introduce = function(){
	return Person.prototype.introduce.call(this) + " " + this.grade;
}

/**
 * [Teacher Teacher inherits Person]
 * @param {[type]} fname     [First Name]
 * @param {[type]} lname     [Last Name]
 * @param {[type]} specialty [Specialty]
 */
function Teacher(fname, lname, specialty){
	this.specialty = specialty;

	Person.apply(this, arguments);
	Person.call(this, fname, lname);
}

Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;

Teacher.prototype.introduce = function(){
	return Person.prototype.introduce.call(this) + " " + this.specialty;
}