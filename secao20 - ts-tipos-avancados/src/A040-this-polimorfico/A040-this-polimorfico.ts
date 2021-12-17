export class Calculadora {
  constructor(public numero: number) {}

  //this pode ser usado como tipo
  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

const calc1 = new Calculadora(10);
calc1.add(5).mul(2).sub(10).div(5); //chamadas podem ser feitas em cadeia porque está retornando this nos métodos
console.log(calc1);

export class SubCalculadora extends Calculadora {
  //o this agora se refere à SubCalculadora
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calc2 = new SubCalculadora(11);
calc2.add(1).mul(2).sub(12).div(4).pow(2); //this polimórfico agora se refere à subcalculadora
console.log(calc2);

//-----------------------------

//outro exemplo feito com o padrão de projeto "Builder" (GoF) para montar o objeto conforme for chamado
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').setMethod('post').send(); //chamadas em cadeia
