import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutorListPage } from './autor-list';

@NgModule({
  declarations: [
    AutorListPage,
  ],
  imports: [
    IonicPageModule.forChild(AutorListPage),
  ],
})
export class AutorListPageModule {}
