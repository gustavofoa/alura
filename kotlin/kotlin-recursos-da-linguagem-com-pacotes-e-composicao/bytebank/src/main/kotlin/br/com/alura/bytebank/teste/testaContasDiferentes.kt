package br.com.alura.bytebank.teste

import br.com.alura.bytebank.modelo.ContaCorrente
import br.com.alura.bytebank.modelo.ContaPoupanca

fun testaContasDiferentes() {
    val contaCorrente = ContaCorrente(
        titular = "modelo.Conta Corrente",
        numero = 1000
    )
    val contaPoupanca = ContaPoupanca(
        titular = "modelo.Conta Corrente",
        numero = 1001
    )

    contaCorrente.deposita(1000.0)
    contaPoupanca.deposita(1000.0)

    contaCorrente.saca(100.0)
    contaPoupanca.saca(100.0)

    println("Saldo Corrente: ${contaCorrente.saldo}")
    println("Saldo Poupança: ${contaPoupanca.saldo}")
}
