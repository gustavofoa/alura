import { NegociacaoController } from "./controllers/NegociacaoController";

const controller = new NegociacaoController();

//Teste de comentário que não vai pra produção
$(".form").submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importaDados.bind(controller));