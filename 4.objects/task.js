function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
   this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  if (this.marks && this.marks.length > 0) {
    let sum = 0;
    this.marks.forEach(element => {
     sum += element;   
    });
    let avg = Number((sum / this.marks.length).toFixed(2)) ;
    return avg;
  } else {
    return 0;
  }
};

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
};
