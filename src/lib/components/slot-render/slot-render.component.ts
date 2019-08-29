import { Component, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { FragmentRenderService } from '../../services/fragment-render.service';
import { FragmentProvider } from '../../model/fragment-provider';

@Component({
  selector: 'slot-render',
  templateUrl: './slot-render.component.html',
  styleUrls: ['./slot-render.component.scss']
})
export class SlotRenderComponent {

  @Input('data') data: any;
  @ViewChild('fragment', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private frs: FragmentRenderService) { }

  public renderComponent(fragmentProvider: FragmentProvider) {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
      this.frs.renderComponent(this.viewContainerRef, fragmentProvider, this.data);
    }
  }

}
