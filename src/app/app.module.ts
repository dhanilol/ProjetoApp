import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Camera} from "@ionic-native/camera";
import { AnimatesDirective, AnimationService } from "css-animator";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LivroListPage } from '../pages/livro-list/livro-list';
import { AutorListPage } from '../pages/autor-list/autor-list';

import { LivroProvider } from "../providers/livro";
import { LivroAddPage } from "../pages/livro-add/livro-add";
import { LivroDetailsPage } from "../pages/livro-details/livro-details";

import { AutorProvider } from '../providers/autor';
import { AutorAddPage } from "../pages/autor-add/autor-add";
import { AutorDetailsPage } from "../pages/autor-details/autor-details";

@NgModule({
	declarations: [
		MyApp,
		HomePage,

		LivroListPage,
		LivroAddPage, 
		LivroDetailsPage,

		AutorListPage,
		AutorAddPage,
		AutorDetailsPage,

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
		LivroDetailsPage,
		
		AutorListPage,
		AutorAddPage,
		AutorDetailsPage
	],

	providers: [
		StatusBar,
		SplashScreen,
		AnimationService,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		LivroProvider,
		AutorProvider,
		Camera
	]
})
export class AppModule { }
