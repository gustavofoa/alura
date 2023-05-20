package br.com.alura.bytebank.teste

import br.com.alura.bytebank.modelo.Cliente
import br.com.alura.bytebank.modelo.Diretor
import br.com.alura.bytebank.modelo.Gerente
import br.com.alura.bytebank.modelo.SistemaInterno

fun testaAutenticacao() {
    val gerente = Gerente(
        nome = "modelo.Gerente",
        cpf = "111.111.111-11",
        salario = 1000.0,
        senha = 1000
    )

    val diretor = Diretor(
        nome = "modelo.Diretor",
        cpf = "222.222.222-22",
        salario = 2000.0,
        senha = 2000,
        plr = 2000.0
    )

    val cliente = Cliente(
        nome = "modelo.Cliente",
        cpf = "333.333.333-33",
        senha = 3000
    )

    val sistemaInterno = SistemaInterno()
    sistemaInterno.entra(funcionarioAdmin = gerente, senha = 1001)
    sistemaInterno.entra(funcionarioAdmin = diretor, senha = 2000)
    sistemaInterno.entra(funcionarioAdmin = cliente, senha = 3000)
}
