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
  avatar: string = "https://avatars.githubusercontent.com/u/147490210?s=400&u=7197abe8d40e7c77dde30973d3475b0776d866f5&v=4";

  @Input()
  vinyl: string = "../assets/svg/vinyl.svg";

  @Input()
  marquee: string = "empty markee...";

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
