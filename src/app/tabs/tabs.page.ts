import { Component, EnvironmentInjector, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'app-tabs',
  styleUrl: 'tabs.page.scss',
  templateUrl: 'tabs.page.html',
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonImg, CommonModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  isIconChange: boolean = false;
  isNotHome: boolean = false;

  constructor() {
    addIcons({ triangle, ellipse, square });
  }

  tabClicked(e: any) {
    e.tab !== 'home' ? this.isIconChange = true : this.isIconChange = false;
    e.tab !== 'home' ? this.isNotHome = true : this.isNotHome = false;
  }
}
