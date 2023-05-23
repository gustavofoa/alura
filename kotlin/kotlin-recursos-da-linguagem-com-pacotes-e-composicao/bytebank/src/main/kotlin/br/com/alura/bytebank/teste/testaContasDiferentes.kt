package br.com.alura.bytebank.teste

import br.com.alura.bytebank.modelo.Cliente
import br.com.alura.bytebank.modelo.ContaCorrente
import br.com.alura.bytebank.modelo.ContaPoupanca
import br.com.alura.bytebank.modelo.Endereco

fun testaContasDiferentes() {
    val contaCorrente = ContaCorrente(
        titular = Cliente(
            nome = "Conta Corrente",
            cpf = "111.111.111-11",
            senha = 1000,
            endereco = Endereco(logradouro = "Rua da Praia")
        ),
        numero = 1000
    )
    val contaPoupanca = ContaPoupanca(
        titular = Cliente(
            nome = "Conta Poupaça",
            cpf = "222.222.222-22",
            senha = 2000
        ),
        numero = 1001
    )

    contaCorrente.deposita(1000.0)
    contaPoupanca.deposita(1000.0)

    contaCorrente.saca(100.0)
    contaPoupanca.saca(100.0)

    println("Logradouro ${contaCorrente.titular.endereco.logradouro}")
    println("Saldo Corrente: ${contaCorrente.saldo}")
    println("Saldo Poupança: ${contaPoupanca.saldo}")
}
