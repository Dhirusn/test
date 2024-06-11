import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Customers',
    url: '#',
    iconComponent: { name: 'cil-user' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Report',
    url: '#',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Customer Report',
        url: '#',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Item Report',
        url: '#',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'RollOver Report',
        url: '#',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'No Order Report',
        url: '#',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Product and Services',
    url: '#',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Products',
        url: '#',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Product List',
        url: '#',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Rack Location',
        url: '#',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Pricing Rule',
        url: '#',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Report',
    url: '#',
    iconComponent: { name: 'cil-bell' },
    children: [{
        name: 'Customer Report',
        url: '#',
        icon: 'nav-icon-bullet',
        children: [
          {
            name: 'Customer Report',
            url: '#',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'Item Report',
            url: '#',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'RollOver Report',
            url: '#',
            icon: 'nav-icon-bullet'
          },
          {
            name: 'No Order Report',
            url: '#',
            icon: 'nav-icon-bullet'
          }
        ]},
      {
        name: 'Item Report',
        url: '#',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'RollOver Report',
        url: '#',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'No Order Report',
        url: '#',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Accounting',
    url: '#',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Vendors',
    url: '#',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Communication',
    url: '#',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Customer Report',
        url: '#',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Item Report',
        url: '#',
        icon: 'nav-icon-bullet'
      }]
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
