var School = Class.create({
	init : function(name, town, classes){
		this.name = name;
		this.town = town;
	    this.classes = [];
	    
	    for (var i = 0; i < classes.length; i++) {
	        this.classes[i] = classes[i];
		};
	}
});

var SchoolClass = Class.create({
	init : function(capacity, capacity, formTeacher, students){
		this.name = name;
		this.capacity = capacity;
		this.formTeacher = formTeacher;
		this.students = [];

		for (var i = 0; i < students.length; i++) {
			this.students[i] = students[i];
		};
	},

	addStudent : function(student){
		if (this.students.length >= this.capacity) {
			throw "Class capacity filled";
		};

		this.students.push(student);
	},

	introduceStudents : function(){		
		for (var i = 0; i < this.students.length; i++) {		
			console.log("Student " + (i+1) + ": " + this.students[i].introduce());
		};
	}
});

var Person = Class.create({
	init : function(fname, lname){
		this.fname = fname;
		this.lname = lname;
	},

	getFullName : function(){
		var fullName = this.fname + " " + this.lname;
		return fullName;
	},

	introduce : function(){
		var introduce = "Why, hello there! Me name thay be " + this.getFullName();
		return introduce;
	}
});

var Teacher = Class.create({
	init : function(fname, lname, specialty){
		this._super.init(fname, lname);
		this.specialty = specialty;
	},

	introduce : function(){
		var introduce = this._super.introduce() + " " + this.specialty;
		return introduce;
	}
});
Teacher.inherit(Person);

var Student = Class.create({
	init : function(fname, lname, grade){
		this._super.init(fname, lname);
		this.grade = grade;
	},

	introduce : function(){
		var introduce = this._super.introduce() + " " + this.grade;		
		return introduce;
	}
});
Student.inherit(Person);

