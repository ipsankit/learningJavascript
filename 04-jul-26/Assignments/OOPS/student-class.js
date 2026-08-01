class Student {
    constructor(name,rollNumber) {
        this.name=name;
        this.rollNumber=rollNumber;
        this.marks = [];
    }
    addMark(mark) {
        this.marks.push(mark);
    }
    getAverage() {
        if (this.marks.length===0) {
return 0;
        }
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }
}

const student = new Student("Bob",101);

student.addMark(80);
student.addMark(90);
student.addMark(70);
console.log(student.name,"Average:",student.getAverage());