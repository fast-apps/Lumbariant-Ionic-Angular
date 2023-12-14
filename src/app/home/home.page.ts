// Angular
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Ionic
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBadge,
         IonList, IonListHeader, IonLabel, IonItem, IonItemDivider,
         IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
// Swiper Elements (needs CUSTOM_ELEMENTS_SCHEMA)
import { register } from 'swiper/element/bundle';
register();
// Custom Components
import { FeedComponent } from '../components/feed/feed.component';
import { FooterComponent } from '../components/footer/footer.component';
// Services
import { DataService } from '../services/data.service';

@Component({
  standalone: true,
  selector: 'app-home',
  styleUrl: 'home.page.scss',
  templateUrl: 'home.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonBadge,
    IonList, IonListHeader, IonItem, IonLabel, IonItemDivider,
    IonGrid, IonCol, IonRow,
    FeedComponent, FooterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  source: WritableSignal<any[]> = signal([]);

  constructor(private dataService: DataService) {
    this.source.set(this.dataService.getVideoList());
  }
}
