import { Component, Type } from "@angular/core";


export interface Fragment extends Component {
    setData<T>(data: T);
}

export interface FragmentProvider {
    getFragmentClass(): Type<Fragment>;
}