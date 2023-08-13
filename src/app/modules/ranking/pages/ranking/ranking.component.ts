import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {

  constructor(private router: Router){}

  next(){
    this.router.navigate(['/finish']);
  }
}
