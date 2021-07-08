import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  checkboxStrokes = ['default', 'fill', 'thick'];
  selectedStroke: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedStroke = this.checkboxStrokes[0];
  }

}
