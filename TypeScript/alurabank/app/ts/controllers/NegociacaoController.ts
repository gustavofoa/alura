import { Negociacoes, Negociacao } from "../models/index";
import { NegociacoesView, MensagemView } from "../views/index";
import { domInject, throttle, logarTempoDeExecucao } from '../helpers/decorators/index';
import { NegociacaoService } from "../services/NegociacaoService";

export class NegociacaoController {
    @domInject('#data')
    private _inputData:JQuery;
    @domInject('#quantidade')
    private _inputQuantidade:JQuery;
    @domInject('#valor')
    private _inputValor:JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _negociacaoService = new NegociacaoService();

    constructor(){
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona() {

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
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }
    private _ehDiaUtil(data: Date): boolean{
        return data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo;
    }

    @throttle()
    importaDados() {

        function isOk(res: Response) {

            if(res.ok) {
                return res
            } else {
                throw new Error(res.statusText);
            }
        }
        
        this._negociacaoService.obterNegociacoes(isOk)
        .then(dados => {
            dados.forEach((negociacao:Negociacao) => this._negociacoes.adiciona(negociacao))
            this._negociacoesView.update(this._negociacoes)
        });
    }
}

enum DiaDaSemana {
    Domingo, Segunda, Terca, Quarta, Quinta, Sexta, Sabado
}