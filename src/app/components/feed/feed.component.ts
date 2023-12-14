import { Component, Input, OnInit } from '@angular/core';

// Ion-Icons es standalone components
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

import { AnimationOptions } from 'ngx-lottie';

@Component({
  standalone: true,
  selector: 'app-feed',
  styleUrl: './feed.component.scss',
  templateUrl: './feed.component.html',
  imports:[IonIcon]
})
export class FeedComponent implements OnInit {
  @Input() video: any;

  option: AnimationOptions = {
    path: './assets/animations/music.json'
  };

  constructor() {
     /**
     * On Ionicons 7.2+ this icon
     * gets mapped to a "logo-ionic" key.
     * Alternatively, developers can do:
     * addIcons({ 'logo-ionic': logoIonic });
     */
     addIcons({ logoIonic });
  }

  ngOnInit() {

  }

}
