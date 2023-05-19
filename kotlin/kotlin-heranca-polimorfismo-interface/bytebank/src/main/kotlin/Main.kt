fun main() {
    println("Bem vindo ao Bytebank")

    val funcionario = Funcionario(
        nome = "Funcionario",
        cpf = "111.111.111-11",
        salario = 1000.0
    )
    println("nome: ${funcionario.nome}")
    println("cpf: ${funcionario.cpf}")
    println("salario: ${funcionario.salario}")
    println("bonificacao: ${funcionario.bonificacao}")
    println()

    val gerente = Gerente(
        nome = "Gerente",
        cpf = "222.222.222-22",
        salario = 2000.0,
        senha = 1234
    )
    println("nome: ${gerente.nome}")
    println("cpf: ${gerente.cpf}")
    println("salario: ${gerente.salario}")
    println("bonificacao: ${gerente.bonificacao}")
    if(gerente.autentica(12345))
        println("Autenticou com sucesso")
    else
        println("Falha na autenticação")
    println()

    val diretor = Diretor(
        nome = "Diretor",
        cpf = "333.333.333-33",
        salario = 3000.0,
        senha = 12345,
        plr = 500.0
    )
    println("nome: ${diretor.nome}")
    println("cpf: ${diretor.cpf}")
    println("salario: ${diretor.salario}")
    println("bonificacao: ${diretor.bonificacao}")
    if(diretor.autentica(12345))
        println("Autenticou com sucesso")
    else
        println("Falha na autenticação")
    println("plr: ${diretor.plr}")
    println()


}

