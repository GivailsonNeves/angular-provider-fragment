import { Injectable, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FragmentProvider } from '../model/fragment-provider';

@Injectable()
export class FragmentRenderService {

  constructor(@Inject(ComponentFactoryResolver) private factoryResolver: ComponentFactoryResolver) {}

  renderComponent(viewContainerRef: ViewContainerRef, fragmentProvider: FragmentProvider, data: any): void {
    const factory = this.factoryResolver
      .resolveComponentFactory(fragmentProvider.getFragmentClass());

    const renderedComponent = factory
      .create(viewContainerRef.parentInjector);

    renderedComponent.instance.setData(data);

    viewContainerRef.insert(renderedComponent.hostView);
  }
}
