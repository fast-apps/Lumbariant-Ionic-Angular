// Angular
import { ChangeDetectionStrategy, Component, ElementRef, Signal, ViewChild, WritableSignal, computed, signal } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Ionic
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBadge,
         IonList, IonListHeader, IonLabel, IonItem, IonItemDivider, IonNote,
         IonGrid, IonCol, IonRow, IonProgressBar } from '@ionic/angular/standalone';
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
    IonGrid, IonCol, IonRow, IonNote, IonProgressBar,
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
    //console.log(this._swiperRef);
    // this._swiperRef?.nativeElement.setAttribute('slides-per-view', '1');
  }

  /**
   * 
   * @param event 
   */
  onSwiperSlideChange(event: any) {
    // Importante: en swiper element los nombres de eventos solo escriben en minúscula!
    // template: <swiper-container ... (swiperslidechange)="onSwiperSlideChange($event)>

    // Si hay más swipers anidados los eventos de todos los swipers se envían a este 
    // mismo handler, por eso comprobamos el id del target que envía el evento
    if (event.target.id === "swiper" ) {
      this.$activeIdx.set(event.srcElement.swiper.activeIndex);
    }
  }

}
