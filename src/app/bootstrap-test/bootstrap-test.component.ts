import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-test',
  templateUrl: './bootstrap-test.component.html',
  styleUrls: ['./bootstrap-test.component.css']
})
export class BootstrapTestComponent implements OnInit {
  hidden = false;

  constructor() { }

  ngOnInit() {
  }

  close(): void {
    this.hidden = !this.hidden;
  }
}
