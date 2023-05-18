fun main(args: Array<String>) {
    println("Bem vindo ao Bytebank")

    val contaJoao = Conta()
    contaJoao.titular = "João"
    val contaMaria = Conta()
    contaMaria.titular = "Maria"

    contaJoao.deposita(100.0)
    contaMaria.deposita(200.0)

    println("Saldo conta Joao ${contaJoao.saldo}")
    println("Saldo conta Maria ${contaMaria.saldo}")

}

class Conta {
    var titular = ""
    var numeroConta = 0
    var saldo = 0.0

    fun deposita(valor: Double) {
        this.saldo += valor
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
