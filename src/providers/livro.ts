import { Injectable } from '@angular/core';
import { ILivro } from "../interfaces/ILivro";

@Injectable()
export class LivroProvider {

    private livros: ILivro[] = [];

    constructor() {
        if (this.livros.length == 0) {
            this.popularLivros();
        }
    }

    popularLivros() {
        this.livros.push({ id: 1, titulo: "Livro 1",  autor:"Autor 1", descricao: "", ano: 2017, img: "assets/capas/livro1.jpg" });
        this.livros.push({ id: 2, titulo: "Livro 2",  autor:"Autor 2", descricao: "", ano: 2016, img: "assets/capas/livro2.jpg" });
        this.livros.push({ id: 3, titulo: "Livro 3",  autor:"Autor 3", descricao: "", ano: 2015, img: "assets/capas/livro3.jpg" });
        this.livros.push({ id: 4, titulo: "Livro 4",  autor:"Autor 4", descricao: "", ano: 2016, img: "assets/capas/livro4.jpg" });
        this.livros.push({ id: 5, titulo: "Livro 5",  autor:"Autor 5", descricao: "", ano: 2016, img: "assets/capas/livro5.jpg" });
        this.livros.push({ id: 6, titulo: "Livro 6",  autor:"Autor 6", descricao: "", ano: 2013, img: "assets/capas/livro6.jpg" });
        this.livros.push({ id: 7, titulo: "Livro 7",  autor:"Autor 7", descricao: "", ano: 2010, img: "assets/capas/livro7.jpg" });
        this.livros.push({ id: 8, titulo: "Livro 8",  autor:"Autor 8", descricao: "", ano: 2017, img: "assets/capas/livro8.jpg" });
        this.livros.push({ id: 9, titulo: "Livro 9",  autor:"Autor 9", descricao: "", ano: 2012, img: "assets/capas/livro9.jpg" });
        this.livros.push({ id: 10, titulo: "Livro 10",  autor:"Autor 10", descricao: "", ano: 2015, img: "assets/capas/livro10.jpg" });
    }
    
    getInstancia(): ILivro {
        return {
            id: 0,
            titulo: "",
            autor: "",
            descricao: "",
            ano: null,
            img: ""
        };
    }
    
    getLivros(): ILivro[] {
        return this.livros;
    }

    adicionarLivro(livro: ILivro) {
        if (livro.id == 0){
            livro.id = this.getNextID();
        }
        this.livros.push(livro);
    }

    removerLivro(livro: ILivro) {
        let position = this.livros.findIndex((l: ILivro) => {
            return l.id == livro.id;
        })
        this.livros.splice(position, 1);
    }
    
    
    private getNextID(): number {
        let nextId = 0;
        
        if (this.livros.length > 0) {
            nextId = Math.max.apply(
                Math, this.livros.map(function (o) { return o.id; })
            );
        }
        return ++nextId;
    }
    
    alterarLivro(livro: ILivro) {
        let position = this.livros.findIndex((l: ILivro) => {
            return l.id == livro.id;
        })
        this.livros[position].titulo = livro.titulo;
        this.livros[position].autor = livro.autor;
        this.livros[position].descricao = livro.descricao;
        this.livros[position].ano = livro.ano;
        this.livros[position].img = livro.img;
    }
    
    carregarLivros() {
    }
}