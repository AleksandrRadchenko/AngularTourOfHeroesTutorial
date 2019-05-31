import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  counter = 0;

  valueChanged() {
    this.counter += 1;
    this.valueChange.emit(this.counter);
  }

  constructor() { }

  ngOnInit() {
  }

}
