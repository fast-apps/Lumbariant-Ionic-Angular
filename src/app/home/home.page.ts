import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, 
         IonList, IonListHeader, IonLabel, IonItem, IonItemDivider } from '@ionic/angular/standalone';
// Register swiper Elements
import { register } from 'swiper/element/bundle';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
register();
// App Resources
import { DataService } from '../services/data.service';
import { FeedComponent } from '../components/feed/feed.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-home',
  styleUrl: 'home.page.scss',
  templateUrl: 'home.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonList, IonListHeader, IonLabel, IonItem, IonItemDivider,
    FeedComponent, FooterComponent
  ],
})
export class HomePage {
  
  source: any[] = [];

  constructor(private dataService: DataService) {
    this.source = this.dataService.getVideoList();
  }
}
