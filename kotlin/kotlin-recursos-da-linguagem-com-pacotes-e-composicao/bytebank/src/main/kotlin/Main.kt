import br.com.alura.bytebank.modelo.*

fun main() {

    val gustavo = Cliente(nome = "Gustavo", cpf = "", senha =- 1)

    ContaPoupanca(titular = gustavo, numero = 1000)
    ContaCorrente(titular = gustavo, numero = 1000)

//    testaContasDiferentes()

    println(Conta.total)

}




