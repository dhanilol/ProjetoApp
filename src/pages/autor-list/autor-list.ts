import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AutorProvider } from "../../providers/autor";
import { IAutor } from "../../interfaces/IAutor";

import { AutorAddPage } from "../autor-add/autor-add";
import { AutorDetailsPage } from "../autor-details/autor-details";


@Component({
    selector: 'page-autor-list',
    templateUrl: 'autor-list.html'
})
export class AutorListPage {
    selectedItem: any;
    icons: string[];
    items: Array<IAutor>;
    itemsFilter: Array<IAutor>;
    pesquisa: string;
    visibilidade: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, public autorProvider: AutorProvider) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.visibilidade = false;

        this.items = autorProvider.getAutores();
        // Aqui removemos todas as linhas de inserção de itens, já que agora
        // está dentro do método autorProvider.getAutores()

        this.itemsFilter = this.items;

    }

    ionViewWillEnter() {
        this.items = this.autorProvider.getAutores();
        this.itemsFilter = this.items;
    }

    itemTapped(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(AutorDetailsPage, {
            item: item
        });
    }

    novoItem(event, item) {
        this.navCtrl.push(AutorAddPage, {});
    }


    abrirPesquisa(event) {
        this.visibilidade = true;
    }

    pesquisar(event) {
        this.itemsFilter = this.items.filter((i) => {
            if (i.nome.indexOf(this.pesquisa) >= 0) {
                return true;
            }
            return false;
        })
    }

    cancelarPesquisa() {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    }
}