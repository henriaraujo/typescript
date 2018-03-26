export interface DaoInterface{
    tableName: string;

    insert(object:any):boolean;
    update(object:any): boolean;
    delete(object:any): boolean;
    find(id: number): any;
    findall(): [any];
}