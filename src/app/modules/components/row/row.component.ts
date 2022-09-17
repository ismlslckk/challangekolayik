import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  
  @Input() layoutGap: string
  @Input() layoutRowGap: string
  @Input() layoutColumnGap: string
  @Input() layoutAlign: 'center' | 'inherit'

  constructor() { }

  ngOnInit() {
  }

}

