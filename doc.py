class Produto:
    def __init__(self,nome,preco,quantidade):
        self.nome = nome
        self.preco = preco
        self.quantidade = quantidade

    def mostrar_info(self):
        print(f"Nome: {self.nome}")
        print(f"Preço: R${self.preco}")
        print(f"Quantidade: {self.quantidade}")

p1 = Produto("Água",1.99,15)
p1.mostrar_info()