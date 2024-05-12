import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-productsgrid',
  templateUrl: './productsgrid.component.html',
  styleUrl: './productsgrid.component.scss'
})
export class ProductsgridComponent implements OnChanges, OnDestroy {
  @Input() selectedSection: string | undefined; 
  @Output() outputValue = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedSection);
    this.outputValue.emit("abc");
  }

  ngOnDestroy(): void {
    console.log("M-am distrus");
  }
}
