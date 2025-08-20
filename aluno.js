class Aluno {
    nome = '';
    nota = '';

    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }


}

const alunos = [
    new Aluno('danilo', 6),
    new Aluno('jean', 10),
    new Aluno('carlos', 8),
    new Aluno('leticia', 4)
];

const alunosAcimaDaMedia = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAcimaDaMedia);