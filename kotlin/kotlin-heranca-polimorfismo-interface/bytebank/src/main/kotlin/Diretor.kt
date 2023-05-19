class Diretor(
    nome: String,
    cpf: String,
    salario: Double,
    senha: Int,
    val plr: Double
) : Gerente(nome = nome, cpf = cpf, salario = salario, senha = senha) {
    override val bonificacao: Double get() = super.bonificacao + this.plr

}