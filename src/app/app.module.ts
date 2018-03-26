import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnimatesDirective, AnimationService } from "css-animator";
import {Camera} from "@ionic-native/camera";


@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ListPage,
		AnimatesDirective
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ListPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		AnimationService,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		Camera
	]
})
export class AppModule { }
