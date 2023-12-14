import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-create',
  styleUrl: 'create.page.scss',
  templateUrl: 'create.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent]
})
export class CreatePage {

  constructor() {}

}
