import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AutorProvider } from "../../providers/autor";
import { IAutor } from "../../interfaces/IAutor";
import { Camera, CameraOptions } from "@ionic-native/camera";

/**
 * Generated class for the AutorAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-autor-add',
    templateUrl: 'autor-add.html',
})
export class AutorAddPage {

    autor: IAutor;
    modoEdicao: boolean;
    imagemUploaded: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, public autorProvider: AutorProvider, private camera: Camera) {
        this.autor = navParams.get("item");

        if (this.autor == null) {
            this.modoEdicao = false;
            this.autor = this.autorProvider.getInstancia();
        } else {
            this.modoEdicao = true;
            this.imagemUploaded = (this.autor.img != "" && this.autor.img != null);
        }
    }

    salvar(evento) {
        if (!this.modoEdicao) {
            this.autorProvider.adicionarAutor(this.autor);
        } else {
            this.autorProvider.alterarAutor(this.autor);
        }
        this.navCtrl.pop();
    }


    cancelar() {
        this.navCtrl.pop();
    }

    cancelarImagem() {
        this.autor.img = "";
        this.imagemUploaded = false;
    }

    tirarFoto() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.autor.img = base64Image;
            this.imagemUploaded = true;
        }, (err) => {
        });
    }

    escolherImagem() {
        const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            saveToPhotoAlbum: false
        }
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.autor.img = base64Image;
            this.imagemUploaded = true;
        }, (err) => {
        });
    }
}

