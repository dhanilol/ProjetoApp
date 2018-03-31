import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { IAutor } from "../../interfaces/IAutor";
import { AutorAddPage } from "../autor-add/autor-add";
import { AutorProvider } from "../../providers/autor";

/**
 * Generated class for the AutorDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-autor-details',
    templateUrl: 'autor-details.html',
})
export class AutorDetailsPage {

    autor: IAutor;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public autorProvider: AutorProvider) {
        this.autor = navParams.get('item');
    }

    editarItem(event) {
        this.navCtrl.push(AutorAddPage, {
            item: this.autor
        });
    }

    removerItem(event) {

        let confirmar = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja excluir esse registro?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: () => {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: () => {
                        this.autorProvider.removerAutor(this.autor);
                        this.navCtrl.pop();
                    }
                }
            ]
        });

        confirmar.present();
    }

}

