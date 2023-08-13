import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  cardWidth: string = '100%';
  cardHeight: string = '100%';

  ngOnInit() {
    this.updateCardWidth();
  }

  updateCardWidth() {
    if(window.innerWidth < 768){
      this.cardWidth = window.innerWidth+'px'
    }else{
      this.cardWidth = '768px';
    }

    this.cardHeight = window.innerHeight+'px';
  }
}
