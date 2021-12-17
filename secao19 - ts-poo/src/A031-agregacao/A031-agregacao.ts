//agregação é quando uma classe tem uma relação mais forte com a outra (representação UML: Carrinho <>------ Produto )
//no exemplo abaixo, o carrinho de compras só faz sentido quando agrega produtos

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 25.5);
const produto2 = new Produto('Bermuda', 39.5);
const produto3 = new Produto('Tênis', 100.99);
console.log(produto1.nome);

const carrinho = new CarrinhoDeCompras();
carrinho.inserirProdutos(produto1, produto2, produto3);

console.log(carrinho);
console.log(carrinho.quantidadeProdutos());
console.log(carrinho.valorTotal());
