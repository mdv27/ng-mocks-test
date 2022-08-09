import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigService } from 'src/config.service';
import { AboutDialogComponent } from './about-dialog-component';

@Component({
  selector: 'app-header',
  template: `<h1>Tour of Heroes {{appConfig.c}}</h1>
  <app-hero-main [hero]="hero"></app-hero-main>`,
  styles: ['h1 { font-weight: normal; }']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  
  appConfig: any;

  constructor(
    private configService: ConfigService,
    private dialog: MatDialog
  ) { }

  async ngOnInit() {
    this.appConfig = await this.configService.getAppConfig();
  }

  async ngAfterViewInit(): Promise<void> {
    this.appConfig = {
      ...this.appConfig, 
      c:4
    };

    this.dialog.open(AboutDialogComponent, {
      maxWidth: '480px'
    });
  }

  ngOnDestroy(): void {
  }

}
