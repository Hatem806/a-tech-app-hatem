import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
  lang = '';

  ngOnInit() {
    this.lang = localStorage.getItem('lang') || 'en';
  }
  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.lang = localStorage.getItem('lang') || 'en';
    window.location.reload();
  }
}
