import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LivroListPage } from '../pages/livro-list/livro-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnimatesDirective, AnimationService } from "css-animator";
import { LivroProvider } from "../providers/livro";
import {Camera} from "@ionic-native/camera";

import { LivroAddPage } from "../pages/livro-add/livro-add";
import { LivroDetailsPage } from "../pages/livro-details/livro-details";

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		LivroListPage,
		LivroAddPage, 
		LivroDetailsPage,
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
		LivroListPage,
		LivroAddPage,
		LivroDetailsPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		AnimationService,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		LivroProvider,
		Camera
	]
})
export class AppModule { }
