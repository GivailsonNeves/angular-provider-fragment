import { Component, AfterViewInit, Input, QueryList, ViewChildren } from '@angular/core';
import { DataProvider } from './model/data-provider';
import { FragmentProvider } from './model/fragment-provider';
import { SlotRenderComponent } from './components/slot-render/slot-render.component';

@Component({
  selector: 'simple-scroller',
  templateUrl: './simple-scroller.component.html',
  styleUrls: ['./simple-scroller.component.scss']
})
export class SimpleScrollerComponent implements AfterViewInit {


  @Input('data-provider') dataProvider: DataProvider;
  @Input('fragment-provider') fragmentProvider: FragmentProvider;

  @ViewChildren(SlotRenderComponent) renderSlots: QueryList<SlotRenderComponent>;

  data: any[];

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => this.checkProviders() );
  }

  checkProviders() {
    if (!this.dataProvider || !this.dataProvider.listData)
      throw new Error("O campo 'data-provider' deve implementar a interface DataProvider");

    if (!this.fragmentProvider || !this.fragmentProvider.getFragmentClass)
      throw new Error("O campo 'fragment-provider' deve implementar a interface FragmentProvider");

    this.loadData();
  }

  loadData() {
    this.dataProvider.listData()
      .subscribe(
        data => this.renderData(data),
        error => window.alert(error)
      )
  }

  renderData(data: any[]): void {
    this.data = data;

    setTimeout(() => {
      this.renderSlots.forEach(
        r => r.renderComponent(this.fragmentProvider)
      )
    });
  }

}
