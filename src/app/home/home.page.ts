// Angular
import { ChangeDetectionStrategy, Component, ElementRef, Signal, ViewChild, WritableSignal, computed, signal } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Ionic
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBadge,
         IonList, IonListHeader, IonLabel, IonItem, IonItemDivider, IonNote,
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
    IonGrid, IonCol, IonRow, IonNote,
    FeedComponent, FooterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  @ViewChild('swiper', { static: false }) 
  private _swiperRef: ElementRef | undefined;

  // $ignals
  $source: WritableSignal<any[]> = signal([]);
  $activeIdx : WritableSignal<number> = signal(0);
  $progress: Signal<number> = computed(() => (this.$activeIdx()+1) / this.$source().length );

  constructor(private dataService: DataService) {
    this.$source.set(this.dataService.getVideoList());
  }

  ngAfterViewInit() {
      // now we need to assign all parameters to Swiper element
    console.log(this._swiperRef);

    this._swiperRef?.nativeElement.setAttribute('slides-per-view', '1');
 
  }

  onSwiperSlideChange(event: any) {
    // Importante: en swiper element los eventos solo escriben en minúscula!
    // template: <swiper-container ... (swiperslidechange)="onSwiperSlideChange($event)>
    this.$activeIdx.set(event.detail[0].activeIndex);
    // console.log('this.$pregress(): ', this.$activeIdx() / this.$source().length );
  }
  
  onSnapIndexChange(event: any) {
    console.log('onSnapIndexChange: ', event);
  }

}
