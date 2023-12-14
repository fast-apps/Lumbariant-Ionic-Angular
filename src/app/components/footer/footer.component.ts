import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IonImg} from '@ionic/angular/standalone';
import {Animation, AnimationController} from '@ionic/angular';
import {AnimationOptions, LottieComponent} from 'ngx-lottie';

@Component({
  standalone: true,
  selector: 'app-footer',
  styleUrl: './footer.component.scss',
  templateUrl: './footer.component.html',
  imports: [IonImg, LottieComponent]
})
export class FooterComponent implements OnInit {
  @ViewChild('animationImg', {static: true}) animationImg: ElementRef | undefined;

  @Input() 
  video: any;

  option: AnimationOptions = {
    path: './assets/animations/music-fly.json'
  };

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    const animation: Animation = this.animationCtrl.create()
      .addElement(this.animationImg?.nativeElement)
      .duration(5000)
      .iterations(Infinity)
      .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)');
    animation.play();

  }

}
