import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';
  isMenuVisible = true;
  menuList = [
    {
      name: 'Parent',
      nodes: [{ name: 'Child', nodes: [{ name: 'Child', nodes: [] }] }],
    },
  ];

  constructor() {
    //this.data.name = "node";
  }

  ngOnInit() {
    // this.data.node = [];
    //console.log("data.nodes.length",this.data.nodes.length)
  }

  showMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
