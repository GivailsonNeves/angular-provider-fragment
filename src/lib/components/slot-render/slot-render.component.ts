import { Component, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { FragmentRenderService } from '../../services/fragment-render.service';
import { FragmentProvider } from '../../model/fragment-provider';

/**
 * Slot padrão para renderização dos componentes dinâmicos.
 */
@Component({
  selector: 'slot-render',
  templateUrl: './slot-render.component.html',
  styleUrls: ['./slot-render.component.scss']
})
export class SlotRenderComponent {

  @Input('data') data: any; //input via atributo para facilitar a utilização no ngfor
  @ViewChild('fragment', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef; //referência ao placeholder onde será injetado o componente dinâmico.

  constructor(private frs: FragmentRenderService) { }

  /**
   * Metodo responsável para adicionar o componente dinâmicamente
   * @param fragmentProvider referência a interface que fornecer o fragmento a ser utilizado.
   */
  public renderComponent(fragmentProvider: FragmentProvider) {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
      this.frs.renderComponent(this.viewContainerRef, fragmentProvider, this.data);
    }
  }

}
