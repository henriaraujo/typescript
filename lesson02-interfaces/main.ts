import { Person } from './../lesson01-classes/person';
import { PersonDao } from './person-dao';


let personDao: PersonDao = new PersonDao();
let person: Person = new Person('Mike');

personDao.insert(person);