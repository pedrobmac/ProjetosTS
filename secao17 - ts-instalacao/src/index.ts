function greet(name: string) {
  return `Olá, ${name}`;
}

export default greet; //exportar a estrutura faz o ts trabalhar em module mode, ao invés de script mode
//module mode: identifica o código separadamente
//script mode: identifica todo o código como se estivesse no mesmo arquivo

console.log(greet("Pedro"));

const um = 1;
