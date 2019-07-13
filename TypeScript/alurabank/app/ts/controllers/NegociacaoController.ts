import { Negociacoes, Negociacao } from "../models/index";
import { NegociacoesView, MensagemView } from "../views/index";

export class NegociacaoController {
    private _inputData:JQuery;
    private _inputQuantidade:JQuery;
    private _inputValor:JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event:Event) {
        event.preventDefault();//Não recarrega a página

        let data = new Date(this._inputData.val().replace(/-/g,','));

        if(this._ehDiaUtil(data)){
            this._mensagemView.update('Somente negociações em dias úteis, por favor.');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
    private ehDiaUtil(data: Date): boolean{
        return data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo, Segunda, Terca, Quarta, Quinta, Sexta, Sabado
}