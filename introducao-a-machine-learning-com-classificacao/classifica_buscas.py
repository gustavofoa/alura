import pandas as pd
from collections import Counter




def fit_and_predict(nome, modelo, treino_X, treino_Y, teste_X, teste_Y):
    modelo.fit(treino_X, treino_Y)

    resultado = modelo.predict(teste_X)
    total_de_acertos = sum(resultado == teste_Y)
    total_de_elementos = len(teste_X)
    taxa_de_acerto = 100.0 * total_de_acertos / total_de_elementos

    print("Taxa de acerto real do algoritmo {0}: {1}".format(nome, taxa_de_acerto))

    acerto_base = max(Counter(teste_Y).values())
    taxa_de_acerto_base = 100.0 * acerto_base / len(teste_Y)
    print("Taxa de acerto do algoritmo base: %f" % taxa_de_acerto_base)

    return taxa_de_acerto

def teste_real(modelo, validacoes_X, validacoes_Y):
    resultado = modelo.predict(validacoes_X)
    acertos = resultado == validacoes_Y

    total_de_acertos = sum(acertos)
    total_de_elementos = len(validacoes_Y)

    taxa_de_acerto = 100.0 * total_de_acertos / total_de_elementos

    msg = "Taxa de acerto do vencedor entre os dois algoritmos no mundo real: {0}".format(taxa_de_acerto)
    print(msg)


df = pd.read_csv('buscas2.csv')

X_df = df[['home', 'busca', 'logado']]
Y_df = df['comprou']

Xdummies_df = pd.get_dummies(X_df)
Ydummies_df = Y_df

X = Xdummies_df.values
Y = Ydummies_df.values

porcentagem_de_treino = 0.8
porcentagem_de_teste = 0.1

tamanho_de_treino = int(porcentagem_de_treino * len(Y))
tamanho_de_teste = int(porcentagem_de_teste * len(Y))
tamanho_de_validacao = len(Y) - tamanho_de_treino - tamanho_de_teste

treino_X = X[:tamanho_de_treino]
treino_Y = Y[:tamanho_de_treino]

fim_de_treino = tamanho_de_treino + tamanho_de_teste

teste_X = X[tamanho_de_treino:fim_de_treino]
teste_Y = Y[tamanho_de_treino:fim_de_treino]

validacao_X = X[fim_de_treino:]
validacao_Y = Y[fim_de_treino:]



from sklearn.naive_bayes import MultinomialNB
modeloMultinomialNB = MultinomialNB()
resultadoMultinomial = fit_and_predict("MultinomialNB", modeloMultinomialNB, treino_X, treino_Y, teste_X, teste_Y)

from sklearn.ensemble import AdaBoostClassifier
modeloAdaBoost = AdaBoostClassifier()
resultadoAdaBoost = fit_and_predict("AdaBoostClassifier", modeloAdaBoost, treino_X, treino_Y, teste_X, teste_Y)


if resultadoMultinomial > resultadoAdaBoost:
    teste_real(modeloMultinomialNB, validacao_X, validacao_Y)
else:
    teste_real(modeloAdaBoost, validacao_X, validacao_Y)

acerto_base = max(Counter(validacao_Y).values())
taxa_de_acerto_base = 100.0 * acerto_base / len(validacao_Y)
print("Taxa de acerto do algoritmo base: %f" % taxa_de_acerto_base)

print("Total de elementos: %d" % len(Y))



