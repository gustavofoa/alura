fun testaContasDiferentes() {
    val contaCorrente = ContaCorrente(
        titular = "Conta Corrente",
        numero = 1000
    )
    val contaPoupanca = ContaPoupanca(
        titular = "Conta Corrente",
        numero = 1001
    )

    contaCorrente.deposita(1000.0)
    contaPoupanca.deposita(1000.0)

    contaCorrente.saca(100.0)
    contaPoupanca.saca(100.0)

    println("Saldo Corrente: ${contaCorrente.saldo}")
    println("Saldo Poupança: ${contaPoupanca.saldo}")
}
