function calculadoraIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

const pessoa1 = {
    nome: 'Rogerio',
    idade: 30,
};

const pessoa2 = {
    nome: 'Carlos',
    idade: 25,
};

const pessoa3 = {
    nome: 'Maria',
    idade: 10,
};

const pessoa4 = {
    nome: 'Rose',
    idade: 24,
};

console.log(calculadoraIdade.call(pessoa4, 30))
// .apply é necessário uso de colchetes