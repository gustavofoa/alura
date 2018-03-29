from dados import carregar_acessos

X, Y = carregar_acessos()

treino_X = X[:50]
treino_Y = Y[:50]

teste_X = X[-49:]
teste_Y = Y[-49:]


from sklearn.naive_bayes import MultinomialNB
modelo = MultinomialNB()
modelo.fit(treino_X, treino_Y)

resultado = modelo.predict(teste_X)
diferencas = resultado - teste_Y
acertos = [d for d in diferencas if d == 0]
total_de_acertos = len(acertos)
total_de_elementos = len(teste_X)
taxa_de_acerto = 100.0 * total_de_acertos / total_de_elementos

print(resultado)
print(teste_Y)

print(taxa_de_acerto)
print(total_de_elementos)