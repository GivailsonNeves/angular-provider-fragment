import { NgModule } from '@angular/core';
import { SimpleScrollerComponent } from './simple-scroller.component';
import { SlotRenderComponent } from './components/slot-render/slot-render.component';
import { CommonModule } from '@angular/common';
import { FragmentRenderService } from './services/fragment-render.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpleScrollerComponent, SlotRenderComponent],
  exports: [SimpleScrollerComponent],
  providers: [FragmentRenderService]
})
export class SimpleScrollerModule { }
