import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unless-directive-test',
  templateUrl: './unless-directive-test.component.html',
  styleUrls: ['./unless-directive-test.component.css']
})
export class UnlessDirectiveTestComponent implements OnInit {
  private condition = true;

  constructor() { }

  ngOnInit() {
  }

}
