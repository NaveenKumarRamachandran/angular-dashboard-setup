import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
})
export class TreeNodeComponent implements OnInit {
  @Input() menuList: any;
  isMenuVisible: boolean;

  constructor() {
    this.isMenuVisible = false;
  }

  ngOnInit(): void {
    console.log(this.menuList);
  }

  add(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
