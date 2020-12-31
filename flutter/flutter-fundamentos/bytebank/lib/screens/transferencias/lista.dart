import 'package:bytebank/models/transferencia.dart';
import 'package:flutter/material.dart';
import 'formulario.dart';

final _tituloAppBar = 'Transferências';

class ListaTransferencia extends StatefulWidget {
  final List<Transferencia> _transferencias = [];

  @override
  State<StatefulWidget> createState() {
    return ListaTransferenciaState();
  }
}

class ListaTransferenciaState extends State<ListaTransferencia> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_tituloAppBar),
      ),
      body: ListView.builder(
        itemCount: widget._transferencias.length,
        itemBuilder: (context, indice) {
          final transferencia = widget._transferencias[indice];
          return ItemTransferencia(transferencia);
        },
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: () {
          Navigator.push(context, MaterialPageRoute(builder: (context) {
            return FormularioTransferencia();
          })).then((transferenciaRecebida) {
            if (transferenciaRecebida != null)
              setState(() => widget._transferencias.add(transferenciaRecebida));
          });
        },
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
