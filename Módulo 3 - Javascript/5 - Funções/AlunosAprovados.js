const alunos = [
    {
        nome: 'Miguel',
        nota: 10,
        turma: '1B',
    },
    {
        nome: 'Julia',
        nota: 7,
        turma: '2B',
    },
    {
        nome: 'Roger',
        nota: 3,
        turma: '1C',
    },
    {
        nome: 'Tallis',
        nota: 9,
        turma: '1A',
    },
    {
        nome: 'Raissa',
        nota: 4,
        turma: '1B',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i ++) {

        const {nota, nome} = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));