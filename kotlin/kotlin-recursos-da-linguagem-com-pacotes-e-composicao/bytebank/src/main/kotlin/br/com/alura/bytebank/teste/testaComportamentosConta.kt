package br.com.alura.bytebank.teste

import br.com.alura.bytebank.modelo.Cliente
import br.com.alura.bytebank.modelo.ContaCorrente
import br.com.alura.bytebank.modelo.ContaPoupanca

fun testaComportamentosConta() {
    val contaJoao = ContaCorrente(titular = Cliente(nome = "João", cpf = "333.333.333-33", senha = 3000), numero = 1000)
    println("modelo.Conta criada ${contaJoao.titular.nome} - ${contaJoao.numero}")
    val contaMaria = ContaPoupanca(titular = Cliente("Maria", cpf = "444.444.444-44", senha = 4000), 1001)
    println("modelo.Conta criada ${contaMaria.titular.nome} - ${contaMaria.numero}")



    println("Depositando 100 na conta do João")
    contaJoao.deposita(100.0)
    println("Depositando 200 na conta da Maria")
    contaMaria.deposita(200.0)
    println("Saldo conta João ${contaJoao.saldo}")
    println("Saldo conta Maria ${contaMaria.saldo}")
    println()

    println("Tentando depositar -10 na conta do João")
    contaJoao.deposita(-10.0)
    println("Saldo conta João ${contaJoao.saldo}")
    println()

    println("Sacando 10 da conta do João")
    contaJoao.saca(10.0)
    println("Sacando 50 da conta da Maria")
    contaMaria.saca(50.0)
    println("Saldo conta João ${contaJoao.saldo}")
    println("Saldo conta Maria ${contaMaria.saldo}")
    println()

    println("Tentando sacar 500 da conta do João")
    contaJoao.saca(500.0)
    println("Tentando sacar 200 da conta da Maria")
    contaMaria.saca(200.0)
    println("Saldo conta João ${contaJoao.saldo}")
    println("Saldo conta Maria ${contaMaria.saldo}")
    println()

    println("Transferindo 50 da conta do João para a conta da Maria")
    var depositoOcorreuComSucesso = contaJoao.transfere(50.0, contaMaria)
    println("Sucesso na transferência? $depositoOcorreuComSucesso")
    println("Saldo conta João ${contaJoao.saldo}")
    println("Saldo conta Maria ${contaMaria.saldo}")
    println()

    println("Transferindo 50 da conta do João para a conta da Maria")
    depositoOcorreuComSucesso = contaJoao.transfere(50.0, contaMaria)
    println("Sucesso na transferência? $depositoOcorreuComSucesso")
    println("Saldo conta João ${contaJoao.saldo}")
    println("Saldo conta Maria ${contaMaria.saldo}")
    println()

//    contaMaria.saldo = 1002.0 //Não funciona
}