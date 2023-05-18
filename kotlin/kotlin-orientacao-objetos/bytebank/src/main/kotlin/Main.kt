fun main(args: Array<String>) {
    println("Bem vindo ao Bytebank")

    val contaJoao = Conta()
    contaJoao.titular = "João"
    contaJoao.numeroConta = 1000
    val contaMaria = Conta()
    contaMaria.titular = "Maria"
    contaMaria.numeroConta = 1001

    println("Depositando 100 na conta do João")
    contaJoao.deposita(100.0)
    println("Depositando 200 na conta da Maria")
    contaMaria.deposita(200.0)
    println("Saldo conta Joao ${contaJoao.saldo}")
    println("Saldo conta Maria ${contaMaria.saldo}")
    println()

    println("Sacando 10 da conta do João")
    contaJoao.saca(10.0)
    println("Sacando 50 da conta da Maria")
    contaMaria.saca(50.0)
    println("Saldo conta Joao ${contaJoao.saldo}")
    println("Saldo conta Maria ${contaMaria.saldo}")
    println()

    println("Tentando sacar 500 da conta do João")
    contaJoao.saca(500.0)
    println("Tentando sacar 200 da conta da Maria")
    contaMaria.saca(200.0)
    println("Saldo conta Joao ${contaJoao.saldo}")
    println("Saldo conta Maria ${contaMaria.saldo}")
    println()

    println("Transferindo 50 da conta do João para a conta da Maria")
    var depositoOcorreuComSucesso = contaJoao.transfere(50.0, contaMaria)
    println("Sucesso na transferência? $depositoOcorreuComSucesso")
    println("Saldo conta Joao ${contaJoao.saldo}")
    println("Saldo conta Maria ${contaMaria.saldo}")
    println()

    println("Transferindo 50 da conta do João para a conta da Maria")
    depositoOcorreuComSucesso = contaJoao.transfere(50.0, contaMaria)
    println("Sucesso na transferência? $depositoOcorreuComSucesso")
    println("Saldo conta Joao ${contaJoao.saldo}")
    println("Saldo conta Maria ${contaMaria.saldo}")
    println()

//    contaMaria.saldo = 1002.0 //Não funciona
    println("Saldo conta Maria ${contaMaria.saldo}")
    println()
}

class Conta {
    var titular = ""
    var numeroConta = 0
    var saldo = 0.0
        private set

    fun deposita(valor: Double) {
        this.saldo += valor
    }

    fun saca(valor: Double) {
        if(saldo >= valor)
            saldo -= valor
    }

    fun transfere(valor: Double, destino: Conta): Boolean {
        if(saldo >= valor) {
            saldo -= valor
            destino.deposita(valor)
            return true
        } else {
            return false
        }
    }



}

fun testaCopiasEReferencias() {
    val numeroX = 10
    var numeroY = numeroX
    numeroY++

    println("numberoX $numeroX")
    println("numberoY $numeroY")


    val contaJoao = Conta()
    contaJoao.titular = "João"
    val contaMaria = contaJoao
    contaMaria.titular = "Maria"

    println("titular conta joao: ${contaJoao.titular}")
    println("titular conta maria: ${contaMaria.titular}")
}

fun testaLacos() {
    for (i in 5 downTo 1 step 2) {

        val titular: String = "Gustavo $i"
        val numeroConta: Int = 1000 + i
        var saldo = i + 10.0

        println("titular $titular")
        println("número da conta $numeroConta")
        println("saldo da conta $saldo")
        println()

//    testaCondicoes(saldo)

    }
}

private fun testaCondicoes(saldo: Double) {
    when {
        saldo > 0.0 -> println("conta é positiva")
        saldo == 0.0 -> println("conta é neutra")
        else -> println("conta é negativa")
    }
}
