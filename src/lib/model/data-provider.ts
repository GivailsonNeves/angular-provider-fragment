import { Observable } from "rxjs";

export interface DataProvider {
    listData<T>(): Observable<T[]>;
}