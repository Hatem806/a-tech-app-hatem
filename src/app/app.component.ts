import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public dir: any = 'ltr';
  public lang = localStorage.getItem('lang');
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.lang || 'en');
    this.translateService.onLangChange.subscribe(
      (x) => (this.dir = x.lang == 'en' ? 'ltr' : 'rtl')
    );
  }

  ngOnInit() {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    if (this.lang === 'ar') {
      link.href = 'assets/bootstrap.rtl.min.css';
    }

    // Append the link element to the head.
    head.appendChild(link);
  }
}
