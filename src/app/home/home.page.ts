// Angular
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Ionic
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
         IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
         IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
// Services
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home',
  styleUrl: 'home.page.scss',
  templateUrl: 'home.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonGrid, IonCol, IonRow
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  // $ignals
  $workouts: WritableSignal<any[]> = signal([]);

  constructor(
    private router: Router,
    private dataService: DataService) {
    this.$workouts.set(this.dataService.getWorkouts());
  }

  ngAfterViewInit() {    
    
  }


  navigateTo(destination: string){
    this.router.navigateByUrl(destination);
  }

}
