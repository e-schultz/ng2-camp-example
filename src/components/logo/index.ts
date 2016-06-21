import { Component } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';

@Component({
  selector: 'rio-logo',
  styles: [require('./logo.css')],
  template: `
    <div className="flex items-center">
      <img
        class="logo"
        [src]="LogoImage"
        alt="Rangle.io"
      />
    </div>
  `
})
export class RioLogo {
  private LogoImage: any;
  constructor(dom: DomSanitizationService) {
    this.LogoImage = dom
      .bypassSecurityTrustUrl(
      require('../../assets/rangleio-logo.svg')
      );
  }

};
