import  express  from "express"; //Importando o express
import CategoriaController from "./Controllers/CategoriaController.js";

const server = express(); //Iniciando o express

server.use(express.json()) //Configurando o json


server.get('/', (req,res)=>{
    res.status(200).json("Servidor Funcionando")
});

server.get('/categorias',CategoriaController.read);
server.post('/categorias', CategoriaController.create);
server.put('/categorias/:id_categoria', CategoriaController.update);
server.delete('/categorias/:id_categoria', CategoriaController.delete);

server.listen(5000);
