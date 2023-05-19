class Gerente(
    val nome: String,
    val cpf: String,
    val salario: Double,
    val senha: Int
) {

    fun bonificacao(): Double {
        return this.salario * 0.2
    }

    fun autentica(senha: Int): Boolean {
        return this.senha == senha
    }

}