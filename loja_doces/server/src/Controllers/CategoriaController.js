import { response } from "express";
import CategoriaModel from "../Models/CategoriaModel.js";
class CategoriaController {
    constructor() {

    }

    create(req, res) {
        const categorias = req.body.nome;
        CategoriaModel.create(categorias).then(
            resposta => {
                console.debug("Inserindo uma Categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Inserindo uma Categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        )


    }


    read(req, res) {
       
        CategoriaModel.read().then(
            resposta => {
                console.debug("Mostrando Categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Mostrando Categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req, res) {
        const id_categoria = req.params.id_categoria;
        const nome = req.body.nome;

        CategoriaModel.update(id_categoria, nome).then(
            resposta=>{
                console.debug("Atualizando Categoria")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta=>{
                console.debug("Erro: Atualizando Categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )

        res.status(200).json("Categoria Atualizado");
    }

    delete(req, res) {
        const id_categoria = req.params.id_categoria;
        CategoriaModel.delete(id_categoria).then(
            resposta =>{
                console.debug("Categoria Deletada");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug("Erro: Ao Deletar Categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        )
       

    }
}

export default new CategoriaController(); 