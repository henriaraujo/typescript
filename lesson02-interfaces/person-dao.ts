
import { DaoInterface } from './dao.interface';
import { Person } from '../lesson01-classes/person';
export class PersonDao implements DaoInterface{

    tableName: string;

    insert(person: Person): boolean {
        console.log('inserting...', person.toString());
        return true;
    }

    update (person: Person): boolean {
        return true;
    }

    delete (id: number): boolean {
        return true;
    }

    find(id: number): Person{
        return null;
    }

    findall(): [Person]{
        return [new Person('Mike')];
    }
}