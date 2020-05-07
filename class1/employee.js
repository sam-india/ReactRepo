 export default class Employee {
     firstName;
     lastName;

     constructor(f, l) {
         this.firstName = f;
         this.lastName = l;
     }

     fullName() {
         console.log(this.firstName + " " + this.lastName);
     }
 };