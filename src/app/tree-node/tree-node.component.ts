import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})

export class TreeNodeComponent implements OnInit {


  constructor() { this.isMenuVisible = false; }

  isMenuVisible: boolean;
  @Input() menuList: any;


  public menu = [
    {
      label: 'User Profile',
      childs: [
        {
          label: 'Personal Details',
          icon: 'fas fa-car',
          childs: [
            {
              label: 'Manage User',
              routerLink: '/user-master/list',
              permission: ''
            },
            {
              label: 'Add User',
              routerLink: '/user-master/create-user',
              permission: '',
            }
          ]
        },
        {
          label: 'Product',
          icon: 'fas fa-coffee',
          childs: [
            {
              label: 'Manage Product',
              routerLink: '/product/list',
              permission: 'Product',
            },
            {
              label: 'Create Product',
              routerLink: '/product/create',
              permission: 'product',

            },
          ]
        },
        {
          label: 'Category',
          icon: 'fas fa-coffee',
          childs: [
            {
              label: 'Manage Product',
              routerLink: '/product/list',
              permission: 'Product',
            },
            {
              label: 'Create Product',
              routerLink: '/product/create',
              permission: 'product',

            },
                   {
              label: 'Delete Product',
              routerLink: '/product/create',
              permission: 'product',

            },
          ]
        },
      ],
    },
    {
      label: 'User Profile',
      childs: [
        {
          label: 'Personal Details',
          icon: 'fas fa-car',
          childs: [
            {
              label: 'Manage User',
              routerLink: '/user-master/list',
              permission: ''
            },
            {
              label: 'Add User',
              routerLink: '/user-master/create-user',
              permission: '',
            }
          ]
        },
        {
          label: 'Product',
          icon: 'fas fa-coffee',
          childs: [
            {
              label: 'Manage Product',
              routerLink: '/product/list',
              permission: 'Product',
            },
            {
              label: 'Create Product',
              routerLink: '/product/create',
              permission: 'product',

            },
          ]
        },
        {
          label: 'Category',
          icon: 'fas fa-coffee',
          childs: [
            {
              label: 'Manage Product',
              routerLink: '/product/list',
              permission: 'Product',
            },
            {
              label: 'Create Product',
              routerLink: '/product/create',
              permission: 'product',

            },
                   {
              label: 'Delete Product',
              routerLink: '/product/create',
              permission: 'product',

            },
          ]
        },
      ]

    }
  ];
  ngOnInit(): void {
    console.log(this.menuList);
  }

  add(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

}
