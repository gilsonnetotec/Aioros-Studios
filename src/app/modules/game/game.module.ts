import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './pages/game/components/background/background.component';
import { GameComponent } from './pages/game/game.component';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    GameComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule
  ]
})
export class GameModule { }
