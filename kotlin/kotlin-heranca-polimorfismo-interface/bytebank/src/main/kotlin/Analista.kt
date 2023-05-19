open class Analista(
    nome: String,
    cpf: String,
    salario: Double
) : Funcionario(nome = nome, cpf = cpf, salario = salario) {
    override val bonificacao: Double get() = super.bonificacao + this.salario * 0.1

}