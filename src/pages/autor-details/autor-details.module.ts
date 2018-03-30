import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutorDetailsPage } from './autor-details';

@NgModule({
  declarations: [
    AutorDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AutorDetailsPage),
  ],
})
export class AutorDetailsPageModule {}
