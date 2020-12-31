import 'package:bytebank/components/editor.dart';
import 'package:bytebank/models/transferencia.dart';
import 'package:flutter/material.dart';

class FormularioTransferencia extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return FormularioTransferenciaState();
  }
}

class FormularioTransferenciaState extends State<FormularioTransferencia> {

  final _tituloAppBar = 'Criando tranferência';
  final _rotuloCampoValor = 'Valor';
  final _dicaCampoValor = '0000';
  final _rotuloCampoNumeroConta = 'Número da Conta';
  final _dicaCampoNumeroConta = '0.00';

  final TextEditingController _controladorCampoNumeroConta =
      TextEditingController();
  final TextEditingController _controladorCampoValor = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_tituloAppBar),
      ),
      body: SingleChildScrollView(
        child: Column(children: [
          Editor(
              controlador: _controladorCampoNumeroConta,
              rotulo: _rotuloCampoNumeroConta,
              dica: _dicaCampoValor),
          Editor(
              controlador: _controladorCampoValor,
              rotulo: _rotuloCampoValor,
              dica: _dicaCampoNumeroConta,
              icone: Icons.monetization_on),
          RaisedButton(
              child: Text('Confirmar'),
              onPressed: () => _criaTransferencia(context))
        ]),
      ),
    );
  }

  void _criaTransferencia(BuildContext context) {
    final int numeroConta = int.tryParse(_controladorCampoNumeroConta.text);
    final double valor = double.tryParse(_controladorCampoValor.text);
    if (numeroConta != null && valor != null) {
      final transferenciaCriada = Transferencia(valor, numeroConta);
      Navigator.pop(context, transferenciaCriada);
    }
  }
}
