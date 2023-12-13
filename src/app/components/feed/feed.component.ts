import {Component, Input, OnInit} from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import {AnimationOptions} from 'ngx-lottie';

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
  }

  ngOnInit() {

  }

}
