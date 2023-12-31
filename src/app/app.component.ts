import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'YeQuanrui';
  repo = {
    name: 'GitHub',
    html_url: 'https://github.com/yequanrui',
    repos_url: 'https://github.com/yequanrui?tab=repositories',
  };
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
      desc: '牛客题库',
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

  constructor(@Inject(DOCUMENT) private _doc: Document) {
    if (this._doc.location.hostname === 'localhost') {
      const localhost = 'http://localhost:8080';
      this.sites.forEach((site) => (site.url = `${localhost}/Web${site.url}`));
      this.defaultDoc.url = `${this.defaultDoc.url}/docs`;
      this.docs.forEach((doc) => (doc.url = `${localhost}/Web${this.defaultDoc.url}${doc.url}`));
    } else if (this._doc.location.hostname.includes('gitee')) {
      this.repo.name = 'Gitee';
      this.repo.html_url = this.repo.html_url.replace('github', 'gitee');
      this.repo.repos_url = `${this.repo.html_url}/projects`;
    }
  }
}
