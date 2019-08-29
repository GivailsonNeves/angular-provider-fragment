import { Component, AfterViewInit, Input, QueryList, ViewChildren } from '@angular/core';
import { DataProvider } from './model/data-provider';
import { FragmentProvider } from './model/fragment-provider';
import { SlotRenderComponent } from './components/slot-render/slot-render.component';

/**
 * Implementação do componente base do scroller
 */
@Component({
  selector: 'simple-scroller',
  templateUrl: './simple-scroller.component.html',
  styleUrls: ['./simple-scroller.component.scss']
})
export class SimpleScrollerComponent implements AfterViewInit {


  @Input('data-provider') dataProvider: DataProvider; //referencia ao objeto que implementa o dataprovider
  @Input('fragment-provider') fragmentProvider: FragmentProvider; //referencia a classe que fornecer o fragment

  @ViewChildren(SlotRenderComponent) renderSlots: QueryList<SlotRenderComponent>; //listagem de slots gerados dinâmicamente.

  data: any[]; //listagem de dados absorvidos pelo dataprovider, serve para o bind do ngfor.

  constructor() { }

  /**
   * utilização do afterinit é necessária para garantir que os providers já estarão acessiveis
   */
  ngAfterViewInit() {
    setTimeout(() => this.checkProviders() ); //settimeout para resolver problemas de assincronismo (render delay)
  }

  /**
   * Método que checa os providers, já que em runtime ele não gerará erro se o pvodier não atender a interface.
   */
  checkProviders() {
    if (!this.dataProvider || !this.dataProvider.listData)
      throw new Error("O campo 'data-provider' deve implementar a interface DataProvider");

    if (!this.fragmentProvider || !this.fragmentProvider.getFragmentClass)
      throw new Error("O campo 'fragment-provider' deve implementar a interface FragmentProvider");

    this.loadData();
  }

  /**
   * método que busca os dados da fonte fornecida, baseando-se no dataprovider
   */
  loadData() {
    this.dataProvider.listData()
      .subscribe(
        data => this.renderData(data),
        error => window.alert(error)
      )
  }

  /**
   * método que gera os componentes de slot, atraves de bind dinâmico, e após suas criações starta a renderização dos slots, fornecendo o fragmentProvider a ser utilizado.
   * @param data 
   */
  renderData(data: any[]): void {
    this.data = data;

    setTimeout(() => { //settimeout para resolver problemas de assincronismo (render delay)
      this.renderSlots.forEach(
        r => r.renderComponent(this.fragmentProvider)
      )
    });
  }

}
