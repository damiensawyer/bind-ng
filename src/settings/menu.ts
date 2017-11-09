export const MENU: any = [
  {
    title: 'Dashboards',
    icon: {
      class: 'fa fa-home'
    },
    routing: '/default-layout/dashboard',
    badge: {
      text: 'New',
      color: '#fff',
      bg: '#FF8426'
    },
    sub: [
      {
        title: 'Default',
        routing: '/default-layout/dashboard'
      },
      {
        title: 'Analytical',
        routing: '/default-layout/dashboard-2'
      },
      {
        title: 'Minimal',
        routing: '/default-layout/dashboard-3'
      }
    ]
  },
  {
    title: 'Widgets',
    icon: {
      class: 'fa fa-th'
    },
    routing: '/default-layout/widgets'
  },
  {
    title: 'Calendar',
    icon: {
      class: 'fa fa-calendar'
    },
    routing: '/default-layout/calendar'
  },
  {
    title: 'Material components',
    icon: {
      class: 'fa fa-briefcase'
    },
    sub: [
      {
        title: 'Button',
        routing: '/default-layout/button'
      },
      {
        title: 'Card',
        routing: '/default-layout/card'
      },
      {
        title: 'Checkbox',
        routing: '/default-layout/checkbox'
      },
      {
        title: 'Chips',
        routing: '/default-layout/chips'
      },
      {
        title: 'Dialog',
        routing: '/default-layout/dialog'
      },
      {
        title: 'Icon',
        routing: '/default-layout/icon'
      },
      {
        title: 'Input',
        routing: '/default-layout/input'
      },
      {
        title: 'List',
        routing: '/default-layout/list'
      },
      {
        title: 'Menu',
        routing: '/default-layout/menu'
      },
      {
        title: 'Progress bar',
        routing: '/default-layout/progress-bar'
      },
      {
        title: 'Progress spinner',
        routing: '/default-layout/progress-spinner'
      },
      {
        title: 'Radio Button',
        routing: '/default-layout/radio-button'
      },
      {
        title: 'Select',
        routing: '/default-layout/select'
      },
      {
        title: 'Slider',
        routing: '/default-layout/slider'
      },
      {
        title: 'Slide toggle',
        routing: '/default-layout/slide-toggle'
      },
      {
        title: 'Snackbar',
        routing: '/default-layout/snackbar'
      },
      {
        title: 'Tabs',
        routing: '/default-layout/tabs'
      },
      {
        title: 'Toolbar',
        routing: '/default-layout/toolbar'
      },
      {
        title: 'Tooltip',
        routing: '/default-layout/tooltip'
      }
    ]
  },
  {
    title: 'Theme components',
    icon: {
      class: 'fa fa-diamond'
    },
    sub: [
      {
        title: 'Alerts',
        routing: '/default-layout/ni-alerts'
      },
      {
        title: 'Badges',
        routing: '/default-layout/ni-badges'
      },
      {
        title: 'Breadcrumbs',
        routing: '/default-layout/ni-breadcrumbs'
      },
      {
        title: 'Buttons',
        routing: '/default-layout/ni-buttons'
      },
      {
        title: 'Cards',
        routing: '/default-layout/ni-cards'
      },
      {
        title: 'Chat',
        routing: '/default-layout/ni-chat'
      },
      {
        title: 'Files',
        routing: '/default-layout/ni-files'
      },
      {
        title: 'Horizontal timeline',
        routing: '/default-layout/ni-h-timeline'
      }
    ]
  },
  {
    title: 'Typography',
    icon: {
      class: 'fa fa-font'
    },
    routing: '/default-layout/typography'
  },
  {
    title: 'Tables',
    icon: {
      class: 'fa fa-table'
    },
    sub: [
      {
        title: 'Simple table',
        routing: '/default-layout/simple-table'
      },
      {
        title: 'Editing table',
        routing: '/default-layout/editing-table'
      },
      {
        title: 'Filtering table',
        routing: '/default-layout/filtering-table'
      },
      {
        title: 'Pagination table',
        routing: '/default-layout/pagination-table'
      },
      {
        title: 'Bootstrap tables',
        routing: '/default-layout/bootstrap-tables'
      }
    ]
  },
  {
    title: 'Forms',
    icon: {
      class: 'fa fa-check-square-o'
    },
    sub: [
      {
        title: 'Form Elements',
        routing: '/default-layout/form-elements'
      },
      {
        title: 'Form Layout',
        routing: '/default-layout/form-layout'
      },
      {
        title: 'Form Validation',
        routing: '/default-layout/form-validation'
      }
    ]
  },
  {
    title: 'Charts',
    icon: {
      class: 'fa fa-pie-chart'
    },
    sub: [
      {
        title: 'Ng2 Charts',
        routing: '/default-layout/ng2-charts'
      },
      {
        title: 'Ngx Charts',
        routing: '/default-layout/ngx-charts'
      }
      ,
      {
        title: 'Amcharts',
        routing: '/default-layout/amcharts'
      }
    ]
  },
  {
    title: 'Maps',
    icon: {
      class: 'fa fa-map-marker'
    },
    sub: [
      {
        title: 'Google map',
        routing: '/default-layout/google-map'
      },
      {
        title: 'Leaflet map',
        routing: '/default-layout/leaflet-map'
      }
    ]
  },
  {
    title: 'Pages service',
    icon: {
      class: 'fa fa-edit'
    },
    sub: [
      {
        title: 'About Us',
        routing: '/default-layout/about-us'
      },
      {
        title: 'FAQ',
        routing: '/default-layout/faq'
      },
      {
        title: 'TimeLine',
        routing: '/default-layout/timeline'
      },
      {
        title: 'Invoice',
        routing: '/default-layout/invoice'
      }
    ]
  },
  {
    title: 'Extra pages',
    icon: {
      class: 'fa fa-clone'
    },
    sub: [
      {
        title: 'Sign In v1',
        routing: '/extra-layout/sign-in'
      },
      {
        title: 'Sign In v2',
        routing: '/default-layout/sign-in'
      },
      {
        title: 'Sign In with Social',
        routing: '/extra-layout/sign-in-social'
      },
      {
        title: 'Sign Up v1',
        routing: '/extra-layout/sign-up'
      },
      {
        title: 'Sign Up v2',
        routing: '/default-layout/sign-up'
      },
      {
        title: 'Forgot password',
        routing: '/extra-layout/forgot'
      },
      {
        title: 'Confirm email',
        routing: '/extra-layout/confirm'
      },
      {
        title: '404',
        routing: '/extra-layout/page-404'
      },
      {
        title: '500',
        routing: '/extra-layout/page-500'
      },
      {
        title: 'Not found',
        routing: '/default-layout/not-found'
      }
    ]
  }
];