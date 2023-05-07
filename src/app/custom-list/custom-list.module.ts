import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomListComponent } from './custom-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';



@NgModule({
  declarations: [CustomListComponent],
  imports: [CommonModule, BrowserModule],
  exports: [CustomListComponent],
  providers: []
})
export class CustomListModule implements DoBootstrap {
  constructor(private injector: Injector) { }

  ngDoBootstrap(): void {
    const config = {
      injector: this.injector
    }
    const el = createCustomElement(CustomListComponent, config)
    // Se declara y define el elemento personalizado en el DOM
    customElements.define("custom-list", el)
  }
}
