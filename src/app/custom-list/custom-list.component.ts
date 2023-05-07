import { Component, Input, Output, EventEmitter } from '@angular/core';

interface ListItem {
  desc: string,
  id: number,
}

@Component({
  selector: 'app-custom-list',
  template: `
    <p *ngFor="let item of items; let i=index;" (click)="handleItemClicked(item)">
      {{i+1}} - {{item.desc}}
    </p>
  `,
  styles: []
})
export class CustomListComponent {
  @Input()
  items = [{ desc: 'Eat some celery', id: 1 }]

  @Output()
  itemClicked = new EventEmitter<number>()

  constructor() { }

  handleItemClicked(item: ListItem) {
    this.itemClicked.emit(item.id)
  }
}
