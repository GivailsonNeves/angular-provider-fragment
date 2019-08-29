import { Injectable, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FragmentProvider } from '../model/fragment-provider';

/**
 * Classe responsável pelo serviço de criar dinâmicamente o novo componente
 */
@Injectable()
export class FragmentRenderService {

  constructor(@Inject(ComponentFactoryResolver) private factoryResolver: ComponentFactoryResolver) {}

  /**
   * Método chave para criar o componente dinâmico.
   * 
   * @param viewContainerRef referência ao placeholder 
   * @param fragmentProvider interface que fornecerá o fragment
   * @param data dado a ser injetado no fragment
   */
  renderComponent(viewContainerRef: ViewContainerRef, fragmentProvider: FragmentProvider, data: any): void {
    const factory = this.factoryResolver
      .resolveComponentFactory(fragmentProvider.getFragmentClass());

    const renderedComponent = factory
      .create(viewContainerRef.parentInjector);

    renderedComponent.instance.setData(data);

    viewContainerRef.insert(renderedComponent.hostView);
  }
}
