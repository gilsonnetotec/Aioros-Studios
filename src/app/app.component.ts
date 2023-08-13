import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    window.scrollTo(0, 0);
  }
  onResize(event: Event): void {
    this.adjustContainerPosition();
  }
  @ViewChild('containerMain') containerMain!: ElementRef;
  title:string      =  'Aioros Studios';
  loading:boolean   =   true;
  audio: HTMLAudioElement = new Audio('/assets/Sounds/music.mp3');
  startGame:boolean = false;


  constructor(){
    this.audio = new Audio('/assets/Sounds/music.mp3');
    this.audio.loop = true;
    setTimeout(() => {
     this.loading = false;
    }, 3000);
  }

  playAudio() {
    const that = this;
    try {
      that.audio.play()
      .then(() => {
        console.log('Áudio reproduzindo');
      })
      .catch(error => {
        console.error('Erro ao reproduzir áudio:', error);
      });
    } catch (error) {
      setTimeout(() => {
        console.log("Erro ao exibir audio")
      }, 0);
    }
    setTimeout(() => {
      this.startGame = true;
    }, 1000);
  }

  ngAfterViewInit(): void {
    this.adjustContainerPosition();
  }

  adjustContainerPosition(): void {
    if (this.containerMain) {
      const containerMain = this.containerMain.nativeElement as HTMLElement;
      const windowWidth = window.innerWidth;

      if (window.innerWidth > 768) {
        containerMain.style.position = 'absolute';
        containerMain.style.width = '768px';
        containerMain.style.left = '50%';
        containerMain.style.transform = 'translateX(-50%)';
      }
    }
  }
}
