class Diretor(
    nome: String,
    cpf: String,
    salario: Double,
    senha: Int,
    val plr: Double
) : FuncionarioAdmin(nome = nome, cpf = cpf, salario = salario, senha = senha) {
    override val bonificacao: Double get() = this.salario * 0.1 + this.salario + this.plr

}