import { Injectable } from '@angular/core';
import { IAutor } from "../interfaces/IAutor";

@Injectable()
export class AutorProvider {

    private autores: IAutor[] = [];

    constructor() {
        if (this.autores.length == 0) {
            this.popularAutores();
        }
    }

    popularAutores() {
        this.autores.push({ id: 1, nome: "Autor ", img: "assets/autores/jk-rowling.jpg" });
    }

    getInstancia(): IAutor {
        return {
            id: 0,
            nome: "",
            img: ""
        };
    }

    getAutores(): IAutor[] {
        return this.autores;
    }

    adicionarAutor(autor: IAutor) {
        if (autor.id == 0){
            autor.id = this.getNextID();
        }
        this.autores.push(autor);
    }

    removerAutor(autor: IAutor) {
        let position = this.autores.findIndex((l: IAutor) => {
            return l.id == autor.id;
        })
        this.autores.splice(position, 1);
    }

    private getNextID(): number {
        let nextId = 0;
        
        if (this.autores.length > 0) {
            nextId = Math.max.apply(
                Math, this.autores.map(function (o) { return o.id; })
            );
        }
        return ++nextId;
    }

    alterarAutor(autor: IAutor) {
        let position = this.autores.findIndex((l: IAutor) => {
            return l.id == autor.id;
        })
        this.autores[position].nome = autor.nome;
        this.autores[position].img = autor.img; 
    }

    carregarAutores() {
    }

}