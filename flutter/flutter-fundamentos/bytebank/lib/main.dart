import 'package:flutter/material.dart';

void main() => runApp(BytebankApp());

class BytebankApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: FormularioTransferencia(),
    );
  }
}

class FormularioTransferencia extends StatelessWidget {

  final TextEditingController _controladorCampoNumeroConta = TextEditingController();
  final TextEditingController _controladorCampoValor = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Criando tranferência"),
      ),
      body: Column(children: [
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: TextField(
            controller: _controladorCampoNumeroConta,
            style: TextStyle(fontSize: 24.0),
            decoration:
            InputDecoration(labelText: "Número da conta", hintText: "0000"),
            keyboardType: TextInputType.number,
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: TextField(
            controller: _controladorCampoValor,
            style: TextStyle(fontSize: 24.0),
            decoration: InputDecoration(
                icon: Icon(Icons.monetization_on),
                labelText: "Valor",
                hintText: "0.00"),
            keyboardType: TextInputType.number,
          ),
        ),
        RaisedButton(child: Text("Confirmar"), onPressed: () {
          debugPrint("clicou no confirmar");
          final int numeroConta = int.tryParse(_controladorCampoNumeroConta.text);
          final double valor = double.tryParse (_controladorCampoValor.text);
          if(numeroConta != null && valor != null) {
            final transferenciaCriada = Transferencia(valor, numeroConta);
            debugPrint('$transferenciaCriada');
          }
        })
      ]),
    );
  }
}

class ListaTransferencias extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Transferências"),
      ),
      body: Column(children: [
        ItemTransferencia(Transferencia(110.0, 1000)),
        ItemTransferencia(Transferencia(200.0, 1200)),
      ]),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
      ),
    );
  }
}

class ItemTransferencia extends StatelessWidget {
  final Transferencia transferencia;

  ItemTransferencia(this.transferencia);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: Icon(Icons.monetization_on),
        title: Text(this.transferencia.valor.toString()),
        subtitle: Text(this.transferencia.numeroConta.toString()),
      ),
    );
  }
}

class Transferencia {
  final double valor;
  final int numeroConta;

  Transferencia(this.valor, this.numeroConta);

  @override
  String toString() {
    return 'Transferencia{valor: $valor, numeroConta: $numeroConta}';
  }
}
