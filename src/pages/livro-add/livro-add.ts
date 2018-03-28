import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LivroProvider } from "../../providers/livro";
import { ILivro } from "../../interfaces/ILivro";
import { Camera, CameraOptions } from "@ionic-native/camera";

/**
 * Generated class for the LivroAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-livro-add',
    templateUrl: 'livro-add.html',
})
export class LivroAddPage {

    livro: ILivro;
    modoEdicao: boolean;
    imagemUploaded: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, public livroProvider: LivroProvider, private camera: Camera) {
        this.livro = navParams.get("item");

        if (this.livro == null) {
            this.modoEdicao = false;
            this.livro = this.livroProvider.getInstancia();
        } else {
            this.modoEdicao = true;
            this.imagemUploaded = (this.livro.img != "" && this.livro.img != null);
        }
    }

    salvar(evento) {
        if (!this.modoEdicao) {
            this.livroProvider.adicionarLivro(this.livro);
        } else {
            this.livroProvider.alterarLivro(this.livro);
        }
        this.navCtrl.pop();
    }


    cancelar() {
        this.navCtrl.pop();
    }

    cancelarImagem() {
        this.livro.img = "";
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
            this.livro.img = base64Image;
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
            this.livro.img = base64Image;
            this.imagemUploaded = true;
        }, (err) => {
        });
    }
}

