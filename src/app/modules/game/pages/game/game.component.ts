import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    window.scrollTo(0, 0);
  }

  constructor(private router: Router){}

  isIconActive: boolean = false;
  iconUrl: string = 'assets/Images/BTN_Garra.png';

  isIconActiveUp: boolean = false;
  iconUrlUp: string = 'assets/Images/BTN_Cima.png';

  isIconActiveDown: boolean = false;
  iconUrlDown: string = 'assets/Images/BTN_Baixo.png';

  isIconActiveRight: boolean = false;
  iconUrlRight: string = 'assets/Images/BTN_Direita.png';

  isIconActiveLeft: boolean = false;
  iconUrlLeft: string = 'assets/Images/BTN_Esquerda.png';

  ngOnInit(): void {
    document.body.style.overflowX = 'hidden';
  }

  toggleIcon(): void {
    this.isIconActive = !this.isIconActive;
    if(this.isIconActive){
      this.iconUrl = this.isIconActive ? 'assets/Images/BTN_Garra-DW.png' : 'assets/Images/BTN_Garra.png';
      this.setAudio();
      setTimeout(() => {
        this.iconUrl = 'assets/Images/BTN_Garra.png'
        this.isIconActive = false;
      }, 100);
      setTimeout(() => {
        this.router.navigate(['/ranking']);
      }, 3000);
    }
  }

  toggleIconUp(): void {
    this.isIconActiveUp = !this.isIconActiveUp;
    if(this.isIconActiveUp){
      this.iconUrlUp = this.isIconActiveUp ? 'assets/Images/BTN_Cima-DW.png' : 'assets/Images/BTN_Cima.png';
      this.setAudio();
      setTimeout(() => {
        this.iconUrlUp = 'assets/Images/BTN_Cima.png'
        this.isIconActiveUp = false;
      }, 100);
    }
  }

  toggleIconDown(): void {
    this.isIconActiveDown = !this.isIconActiveDown;
    if(this.isIconActiveDown){
      this.iconUrlDown = this.isIconActiveDown ? 'assets/Images/BTN_Baixo-DW.png' : 'assets/Images/BTN_Baixo.png';
      this.setAudio();
      setTimeout(() => {
        this.iconUrlDown = 'assets/Images/BTN_Baixo.png'
        this.isIconActiveDown = false;
      }, 100);
    }
  }

  toggleIconRight(): void {
    this.isIconActiveRight = !this.isIconActiveRight;
    if(this.isIconActiveRight){
      this.iconUrlRight = this.isIconActiveRight ? 'assets/Images/BTN_Direita-DW.png' : 'assets/Images/BTN_Direita.png';
      this.setAudio();
      setTimeout(() => {
        this.iconUrlRight = 'assets/Images/BTN_Direita.png'
        this.isIconActiveRight = false;
      }, 100);
    }
  }

  toggleIconLeft(): void {
    this.isIconActiveLeft = !this.isIconActiveLeft;
    if(this.isIconActiveLeft){
      this.iconUrlLeft = this.isIconActiveLeft ? 'assets/Images/BTN_Esquerda-DW.png' : 'assets/Images/BTN_Esquerda.png';
      this.setAudio();
      setTimeout(() => {
        this.iconUrlLeft = 'assets/Images/BTN_Esquerda.png'
        this.isIconActiveLeft = false;
      }, 100);
    }
  }

  async setAudio(){
    const audio = document.getElementById("myAudio") as HTMLAudioElement;
    audio.play();
  }
}


