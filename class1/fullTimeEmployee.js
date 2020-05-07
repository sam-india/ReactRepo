import Employee from './employee'

export class FullTimeEmployee extends Employee {
    salary;

    constructor(f, l, s) {
        super(f, l);
        this.salary = s;
    }
}