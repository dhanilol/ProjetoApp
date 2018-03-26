import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnimationBuilder, AnimationService } from "css-animator";


@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})

export class ListPage {
    selectedItem: any;
    icons: string[];
    items: Array<{ title: string, note: string, icon: string }>;

    @ViewChild('myElement') myElem;
    private animator: AnimationBuilder;

    constructor(public navCtrl: NavController, public navParams: NavParams, animationService: AnimationService) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.animator = animationService.builder();

        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];

        this.items = [];
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }

    itemTapped(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage, {
            item: item
        });
    }

    animarBotao() {
        this.animator.setType('animate-in-primary')
            .show(this.myElem.nativeElement);
    }
    animarBotao2() {
        this.animator.setType('exemplo')
            .show(this.myElem.nativeElement);
    }
}
