const multiplicacao = (a: number, b: number) => {
  return `O resultado da multiplicação é ${a * b}`;
};

const saudacao = (nome: string) => {
    return `Olá, ${nome}!`;
};

console.log(saudacao("Maria"));
console.log(multiplicacao(2, 3));