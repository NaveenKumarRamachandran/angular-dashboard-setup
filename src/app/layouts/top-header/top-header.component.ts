import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit {

  @Output() menuEnable = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}

  showMenu() {
    this.menuEnable.emit('');
  }
}
