package br.com.alura.bytebank.modelo

open class Conta(
    val titular: Cliente,
    val numero: Int
) {
    var saldo = 0.0
        private set

    fun deposita(valor: Double) {
        if(valor > 0)
            this.saldo += valor
    }

    open fun saca(valor: Double) {
        if(saldo >= valor)
            saldo -= valor
    }

    fun transfere(valor: Double, destino: Conta): Boolean {
        return if(saldo >= valor) {
            saldo -= valor
            destino.deposita(valor)
            true
        } else {
            false
        }
    }

}