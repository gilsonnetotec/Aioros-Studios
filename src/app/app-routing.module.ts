import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './modules/game/pages/game/game.component';
import { FinishComponent } from './modules/finish/pages/finish/finish.component';
import { RankingComponent } from './modules/ranking/pages/ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    loadChildren: () =>
      import('./modules/game/game.module').then((m) => m.GameModule)
  },
  {
    path: 'finish',
    component: FinishComponent,
    loadChildren: () =>
      import('./modules/finish/finish.module').then((m) => m.FinishModule)
  },
  {
    path: 'ranking',
    component: RankingComponent,
    loadChildren: () =>
      import('./modules/ranking/ranking.module').then((m) => m.RankingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
