fun main() {
    println("Bem vindo ao Bytebank")

    val gustavo = Gerente(
        nome = "Gustavo",
        cpf = "111.111.111-11",
        salario = 1000.0,
        senha = 1234
    )

    println("nome: ${gustavo.nome}")
    println("cpf: ${gustavo.cpf}")
    println("salario: ${gustavo.salario}")
    println("bonificacao: ${gustavo.bonificacao()}")

    if(gustavo.autentica(12345))
        println("Autenticou com sucesso")
    else
        println("Falha na autenticação")


}

