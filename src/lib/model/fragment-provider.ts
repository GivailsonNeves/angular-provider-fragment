import { Component, Type } from "@angular/core";

/**
 * Fragment, Interface base para a criaçãod e um Fragment, deve ser implementada pelo componente a ser utilizado como fragment
 * 
 */
export interface Fragment extends Component {

    /**
     * Garante a passagem dos dados advindos do provider para o componente após a sua criação.
     * 
     * @param data valor generico que permite que o componente receba os dados tal qual o provider contêm em cada item de sua coleção.
     */
    setData<T>(data: T);
}

/**
 * Interface que serve de base para a o provimento do provider
 */
export interface FragmentProvider {

    /**
     * Método que devolve o componente a ser renderizado e que atenda a determinação da classe Fragment
     */
    getFragmentClass(): Type<Fragment>;
}