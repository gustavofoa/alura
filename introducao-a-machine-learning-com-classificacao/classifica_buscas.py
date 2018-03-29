import pandas as pd

df = pd.read_csv('cursos.csv')

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
diferencas = resultado - teste_Y
acertos = [d for d in diferencas if d == 0]
total_de_acertos = len(acertos)
total_de_elementos = len(teste_X)
taxa_de_acerto = 100.0 * total_de_acertos / total_de_elementos

print(taxa_de_acerto)
print(total_de_elementos)