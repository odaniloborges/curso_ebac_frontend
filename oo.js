function Alimentacao(ordem) {
    this.ordem = ordem;
}

function Habitat(local) {
    this.local = local;
}

function Animal(nome, ordem, local) {
    this.nome = nome;
    Alimentacao.call(this, ordem);
    Habitat.call(this, local);
}

const animal1 = new Animal("Tigre", "Carnivoro", "Asia");
const animal2 = new Animal("Capivara", "Herbivoro", "América do Sul");
const animal3 = new Animal("Hipopotamo", "Onivero", "Africa");

console.log(animal1);
console.log(animal2);
console.log(animal3);