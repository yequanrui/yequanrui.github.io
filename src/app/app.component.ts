import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'YeQuanrui';
  sites = [
    {
      id: 'CloudTools',
      name: 'CloudTools',
      desc: 'Toolsets based on DevUI(Angular)',
      url: '/CloudTools',
    },
    {
      id: 'CloudAdmin',
      name: 'CloudAdmin',
      desc: 'Admin based on DevUI(Angular)',
      url: '/CloudAdmin',
    },
    {
      id: 'CloudModel',
      name: 'CloudModel',
      desc: '3D Model Demo',
      url: '/CloudModel',
    },
    {
      id: 'CloudVideo',
      name: 'CloudVideo',
      desc: 'Record daily',
      url: '/CloudVideo',
    },
    {
      id: 'Resume',
      name: 'Resume',
      desc: 'My online resume',
      url: '/Resume',
    },
  ];
  defaultSite = this.sites[0];
  defaultDoc = {
    id: 'CloudNotes',
    name: 'CloudNotes',
    desc: 'A markdown-based notes site using docsifyjs',
    url: '/CloudNotes',
  };
  docs = [
    {
      id: 'LeetCode',
      name: 'LeetCode',
      desc: '力扣题库',
      url: '/CloudNotes/#/LeetCode/_index',
    },
    {
      id: 'NowCoder',
      name: 'NowCoder',
      desc: '牛客题库-华为机考',
      url: '/CloudNotes/#/NowCoder/_index',
    },
    {
      id: 'DevNotes',
      name: 'DevNotes',
      desc: 'Notes for Development',
      url: '/CloudNotes/#/DevNotes/_index',
    },
    {
      id: 'WinNotes',
      name: 'WinNotes',
      desc: 'Notes for Windows',
      url: '/CloudNotes/#/WinNotes/index',
    },
    {
      id: 'MobileNotes',
      name: 'MobileNotes',
      desc: 'Notes for Mobile',
      url: '/#/MobileNotes/index',
    },
  ];

  constructor() {
    if (location.hostname === 'localhost') {
      const localhost = 'http://localhost:8080';
      this.sites.forEach((site) => (site.url = `${localhost}/Web${site.url}`));
      this.defaultDoc.url = `${this.defaultDoc.url}/docs`;
      this.docs.forEach((doc) => (doc.url = `${localhost}/Web${this.defaultDoc.url}${doc.url}`));
    }
  }
}
