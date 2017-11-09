import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../layouts/shared-service';
import { AmChartsService } from '@amcharts/amcharts3-angular';
import { User } from '../../ni-components/ni-chat/user';
import { Message } from '../../ni-components/ni-chat/message';

const ngxChartData: any[] = [
  {
    'name': 'Angular',
    'series': [
      {
        'name': '2013',
        'value': 1500
      },
      {
        'name': '2014',
        'value': 2300
      },
      {
        'name': '2015',
        'value': 3000
      },
      {
        'name': '2016',
        'value': 5000
      },
      {
        'name': '2017',
        'value': 7600
      }
    ]
  },
  {
    'name': 'React',
    'series': [
      {
        'name': '2013',
        'value': 980
      },
      {
        'name': '2014',
        'value': 1200
      },
      {
        'name': '2015',
        'value': 4000
      },
      {
        'name': '2016',
        'value': 4500
      },
      {
        'name': '2017',
        'value': 6000
      }
    ]
  },
  {
    'name': 'Vue.js',
    'series': [
      {
        'name': '2013',
        'value': 5200
      },
      {
        'name': '2014',
        'value': 6000
      },
      {
        'name': '2015',
        'value': 5400
      },
      {
        'name': '2016',
        'value': 5000
      },
      {
        'name': '2017',
        'value': 6560
      }
    ]
  },
  {
    'name': 'Backbone.js',
    'series': [
      {
        'name': '2013',
        'value': 6540
      },
      {
        'name': '2014',
        'value': 5300
      },
      {
        'name': '2015',
        'value': 5460
      },
      {
        'name': '2016',
        'value': 4680
      },
      {
        'name': '2017',
        'value': 6240
      }
    ]
  }
];
const folders: any[] = [
  {
    icon: 'android',
    badge: false,
    name: 'Android app',
    updated: 'July 21, 2017'
  },
  {
    icon: 'update',
    badge: false,
    name: 'Update plugins',
    updated: 'July 19, 2017'
  },
  {
    icon: 'bug_report',
    badge: false,
    name: 'Fix bugs',
    updated: 'July 22, 2017'
  },
  {
    icon: 'unarchive',
    badge: false,
    name: 'Create app design',
    updated: 'July 25, 2017'
  },
  {
    icon: 'content_copy',
    badge: 8,
    name: 'Create widgets',
    updated: 'July 16, 2017'
  },
  {
    icon: 'folder_open',
    badge: false,
    name: 'Documentation',
    updated: 'July 28, 2017'
  }
];
const timelineData: any[] = [
  {
    'timeline': [
      {
        'content': `Aenean lacinia bibendum nulla sed consectetur.`,
        'pointColor': '#ea8080'
      },
      {
        'content': `Aenean lacinia bibendum nulla.`,
        'pointColor': '#915035'
      },
      {
        'content': `Lorem ipsum dolor sit amet.`,
        'pointColor': '#B925FF'
      },
      {
        'content': `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
        'pointColor': '#C5CAE9'
      },
      {
        'content': `Lorem ipsum dolor sit.`,
        'pointColor': '#FF8A65'
      }
    ]
  }
];
const users: any[] = [
  {
    from: 'Nancy',
    subject: 'HTML',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    avatar: 'assets/content/avatar-4.jpg'
  },
  {
    from: 'Mary',
    subject: 'Css',
    content: 'Lorem Ipsum has been the industrys standard',
    avatar: 'assets/content/avatar-3.jpg'
  },
  {
    from: 'Bobby',
    subject: 'Angular 2',
    content: 'It is a long established fact that a reader will be distracted by the readable content',
    avatar: 'assets/content/avatar-2.jpg'
  },
  {
    from: 'Roma',
    subject: 'Type Script',
    content: 'There are many variations of passages of',
    avatar: 'assets/content/avatar-1.jpg'
  },
  {
    from: 'Amanda',
    subject: 'PHP',
    content: 'Lorem Ipsum has been the industrys standard',
    avatar: 'assets/content/avatar-5.jpg'
  },
  {
    from: 'Tom',
    subject: 'Sql',
    content: 'There are many variations of passages of',
    avatar: 'assets/content/avatar-6.jpg'
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class PageDashboardComponent {
  pageTitle: string = 'Dashboard';
  ngxChartData: any[] = ngxChartData;
  folders: any[] = folders;
  users: any[] = users;
  timelineData: any[] = timelineData;

  activeUser: User = {
    name: 'Amanda Li',
    lastSeen: 'last seen 10 minutes ago',
    avatar: 'assets/content/avatar-4.jpg'
  };
  messages: Message[] = [
    {
      'date': '8 hours ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
      'my': false
    },
    {
      'date': '7 hours ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur.`,
      'my': true
    },
    {
      'date': '2 hours ago',
      'content': `Contrary to popular belief,`,
      'my': false
    },
    {
      'date': '15 minutes ago',
      'content': `Lorem ipsum dolor sit.`,
      'my': true
    },
    {
      'date': '14 minutes ago',
      'content': `Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
      'my': false
    }
  ];

  constructor( private AmCharts: AmChartsService, private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}

  // Radar
  public radarChartLabels: string[] = [
    'Designing',
    'Coding',
    'Support',
    'Marketing',
    'Sales',
    'Customization',
    'Updating'
  ];
  public radarChartData: any = [
    {
      data: [65, 59, 90, 81, 56, 55, 40],
      label: 'Plugins',
      borderWidth: 1,
      pointRadius: 1
    },
    {
      data: [28, 48, 40, 19, 96, 27, 100],
      label: 'Widgets',
      borderWidth: 1,
      pointRadius: 1
    }
  ];
  public radarChartColors: any[] = [
    {
      backgroundColor: 'rgba(93,173,224,0.2)',
      borderColor: '#5dade0',
      pointBackgroundColor: '#5dade0',
      pointBorderColor: '#0e7cc5',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#000'
    },
    {
      backgroundColor: 'rgba(255,140,0,0.2)',
      borderColor: '#ff8c00',
      pointBackgroundColor: '#ff8c00',
      pointBorderColor: '#FF630B',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#000'
    }
  ];
  public radarChartType: string = 'radar';
}