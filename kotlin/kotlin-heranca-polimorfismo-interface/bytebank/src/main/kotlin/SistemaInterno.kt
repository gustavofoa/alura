class SistemaInterno {

    fun entra(funcionarioAdmin: Autenticavel, senha: Int) {
        if(funcionarioAdmin.autentica(senha))
            println("Bem vindo ao ByteBank!")
        else
            println("Falha na autenticação.")
    }

}