class SistemaInterno {

    fun entra(funcionarioAdmin: FuncionarioAdmin, senha: Int) {
        if(funcionarioAdmin.autentica(senha))
            println("Bem vindo ao ByteBank!")
        else
            println("Falha na autenticação.")
    }

}