package br.com.alura.bytebank.teste

import br.com.alura.bytebank.modelo.Cliente
import br.com.alura.bytebank.modelo.Conta
import br.com.alura.bytebank.modelo.ContaCorrente
import br.com.alura.bytebank.modelo.ContaPoupanca

fun testaObjects() {
    val gustavo = Cliente(nome = "Gustavo", cpf = "", senha = -1)

    ContaPoupanca(titular = gustavo, numero = 1000)
    ContaCorrente(titular = gustavo, numero = 1000)

//    testaContasDiferentes()

    println(Conta.total)
}