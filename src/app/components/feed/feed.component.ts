import { Component, Input, OnInit } from '@angular/core';
// Ion-Icons es standalone components
import { IonIcon, IonText, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { thumbsUpOutline, thumbsDownOutline, chatbubbleEllipsesOutline, heart, heartOutline } from 'ionicons/icons';

import { AnimationOptions } from 'ngx-lottie';

@Component({
  standalone: true,
  selector: 'app-feed',
  styleUrl: './feed.component.scss',
  templateUrl: './feed.component.html',
  imports:[IonIcon, IonText, IonButton]
})
export class FeedComponent implements OnInit {

  themeColor: string = 'secondary';

  @Input() 
  likes: string = "";

  @Input()
  dislikes: string = "";

  @Input()
  comments: string = "";

  @Input()
  favorite: boolean = false;

  option: AnimationOptions = {
    path: './assets/animations/music.json'
  };

  constructor() {
     /**
     * On Ionicons 7.2+ this icon must to gets mapped to "string-name" key:
     * addIcons({ 'logo-ionic': logoIonic });
     */
     addIcons({
      'heart-on': heart, 
      'heart-off': heartOutline, 
      'thumbs-up': thumbsUpOutline, 
      'thumbs-down': thumbsDownOutline,
      'chat-bubble': chatbubbleEllipsesOutline
     });
  }

  ngOnInit() {

  }

}
