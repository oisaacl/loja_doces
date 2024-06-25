import mysql from "mysql2";
import config from "../Config.js";

class CategoriaModel {
    constructor() {
       this.conexao = mysql.createConnection(config.db);
    }
    create(nome) {
    let sql = `insert into categorias values ("${null}", "${nome}");`
       
        return new Promise ((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([201, "Categoria Adicionada"])
            })
        });
    }

    read(){
        let sql = `select * from  categorias;`;
       
        return new Promise ((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([200, retorno])
            })
        });
    }


    update(id_categoria, nome){
        let sql = `UPDATE  categorias SET nome=${nome} WHERE id_categoria= ${id_categoria}`
            
        return new Promise ((rsolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }else if (retorno.affectedRows > 0){
                    resolve([])
                }
                
                resolve([200, retorno])
                
            })
        })

     
    
    }

    delete(id_categoria){
        let sql = `delete from categorias where id_categoria="${id_categoria}";`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }else if (retorno.affectedRows>0){
                    resolve([200,"Categoria Deletada"])
                }else{
                    resolve([404],"Categoria não encontrada")
                }
            })
           
        });
      


    }

}
export default new CategoriaModel();
