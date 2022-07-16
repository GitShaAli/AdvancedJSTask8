let user = [];
class Student{
    static count = 0;
    constructor(name,age,phoneNumber,boardMarks){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.boardMarks = boardMarks;
        user.push(this.name);
        // Student.sCounter();

    }
    isEligibleForPlacement(minMark){
         return (minAge)=>{
            if(this.boardMarks>=minMark && this.age >= minAge){
                console.log(this.name+' is eligible')
            }
            else{
                console.log(this.name+' is not eligible')
            }
        }
    }
    // static sCounter(){
    //     return (Student.count++);
    // }
}

let john = new Student('john',19,908003212,52);
let jack = new Student('jack',21,908003222,22);
let jill = new Student('jill',19,908003242,72);
let jim = new Student('jim',23,9080032125,62);
let jess = new Student('jess',24,908003217,82);
let minmark = 40;
let minAge = 18;
john.isEligibleForPlacement(minmark)(minAge)
jack.isEligibleForPlacement(minmark)(minAge)
jill.isEligibleForPlacement(minmark)(minAge)
jim.isEligibleForPlacement(minmark)(minAge)
jess.isEligibleForPlacement(minmark)(minAge)













   
