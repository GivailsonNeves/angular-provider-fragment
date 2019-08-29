import { Observable } from "rxjs";

/**
 * DataProvider
 * 
 * Classe base para o fornecimento de dados. A utilização do generic T garante que o dado a ser retornado pode ser de qualquer tipo.
 */
export interface DataProvider {
    listData<T>(): Observable<T[]>;
}