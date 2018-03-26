import { Person } from './person';
export class Student extends Person{
    constructor(name: string){
        super(name);
    }

    showAge(age: number):void{
       console.log('Studying...');
       super.showAge(25);
    }
}