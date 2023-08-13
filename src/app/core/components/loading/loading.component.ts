import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  cardWidth: string = '100%';

  constructor(private router: Router){}

  ngOnInit() {
    this.router.navigate(['/']);
    this.updateCardWidth();
  }

  updateCardWidth() {
    if(window.innerWidth >= 1200){
      this.cardWidth = '1200px';
    }else if(window.innerWidth >= 768){
      this.cardWidth = '768px';
    }else{
      this.cardWidth = window.innerWidth+'px';
    }
  }
}


