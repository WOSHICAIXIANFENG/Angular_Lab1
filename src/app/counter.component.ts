import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button type="button" class="btn" (click)="emitCounterValue(false)">-</button>{{counterValue}}<button type="button" class="btn" (click)="emitCounterValue(true)">+</button>
    <br/>
    Init value from parent component:
    <h6>{{initValueFromParent}}</h6>
  `,

  styles: ['button.btn { background-color: #4CAF50; margin-left: 10px; margin-right: 10px; }'],
  encapsulation: ViewEncapsulation.Native
})

export class CounterComponent implements OnInit {
  private counterValue;

  constructor() {
    this.counterValue = 0;
  }

  @Input() initValueFromParent;

  @Input('counter')
  set counter(value: number) {
    this.counterValue = value;
    this.counterChange.emit(this.counterValue);
  }

  @Output() counterChange = new EventEmitter();

  emitCounterValue(flag: boolean) {
    if (!flag) {
      this.counterValue --;
    } else {
      this.counterValue ++;
    }

    this.counterChange.emit(this.counterValue);
  }

  ngOnInit() {
    //this.counterChange.emit(this.counterValue);
  }

  decrease() {
    this.counterValue --;
    //emitCounterValue(); ?? why compile error ?
  }

  increase() {
    this.counterValue ++;
    //emitCounterValue(); ?? why compile error ?
  }
}
