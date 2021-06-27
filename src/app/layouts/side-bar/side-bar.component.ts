import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

   menuList = [
    {
      label: 'User Profile',
      childs: [
        {
          label: 'Personal Details',
          icon: 'bi-person-circle',
          childs: [
            {
              label: 'Manage User',
              routerLink: '/login',
              permission: '',
            },
            {
              label: 'Add User',
              routerLink: '/signup',
              permission: 'signup',
            },
          ],
        },
        {
          label: 'Product',
          icon: 'bi bi-menu-button-fill',
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
          ],
        },
        {
          label: 'Category',
          icon: 'bi bi-menu-button-fill',
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
          ],
        },
      ],
    },
    {
      label: 'User Profile',
      childs: [
        {
          label: 'Personal Details',
          icon: 'bi-person-circle',
          childs: [
            {
              label: 'Manage User',
              routerLink: '/user-master/list',
              permission: '',
            },
            {
              label: 'Add User',
              routerLink: '/user-master/create-user',
              permission: '',
            },
          ],
        },
        {
          label: 'Product',
          icon: 'bi bi-menu-button-fill',
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
          ],
        },
        {
          label: 'Category',
          icon: 'bi bi-menu-button-fill',
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
          ],
        },
      ],
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
