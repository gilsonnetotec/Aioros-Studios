import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ProgressSpinnerModule
  ],
  exports:[
    LoadingComponent
  ]
})
export class CoreModule { }
