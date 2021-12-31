//sempre no escopo global. Usar padrão nome.d.ts

//faz o declaration merge com o pacote externo lodash, seguindo a estrutura deste.
declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
    naoExisto: string;
  }
}
