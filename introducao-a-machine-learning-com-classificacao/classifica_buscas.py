import pandas as pd
from collections import Counter

df = pd.read_csv('cursos_sim_nao.csv')

X_df = df[['home', 'busca', 'logado']]
Y_df = df['comprou']

Xdummies_df = pd.get_dummies(X_df)
Ydummies_df = Y_df

X = Xdummies_df.values
Y = Ydummies_df.values

porcentagem_de_treino = 0.9
tamanho_de_treino = int(porcentagem_de_treino * len(Y))
treino_X = X[:tamanho_de_treino]
treino_Y = Y[:tamanho_de_treino]

tamanho_de_teste = len(Y) - tamanho_de_treino
teste_X = X[-tamanho_de_teste:]
teste_Y = Y[-tamanho_de_teste:]


from sklearn.naive_bayes import MultinomialNB
modelo = MultinomialNB()
modelo.fit(treino_X, treino_Y)



resultado = modelo.predict(teste_X)
total_de_acertos = sum(resultado == teste_Y)
total_de_elementos = len(teste_X)
taxa_de_acerto = 100.0 * total_de_acertos / total_de_elementos

print("Taxa de acerto real do algoritmo: %f" % taxa_de_acerto)
print(total_de_elementos)


acerto_base = max(Counter(teste_Y).values())
taxa_de_acerto_base = 100.0 * acerto_base / len(teste_Y)
print("Taxa de acerto do algoritmo base: %f" % taxa_de_acerto_base)
