function compNum(num1, num2){
    const primeiraFrase = primeiraFrase(num1, num2); 
    const segundaFrase = segundaFrase(num1, num2);
    
    return `${primeiraFrase} ${segundaFrase}`
}

function primeiraFrase(num1, num2){
    let iguais = '';

    if (num1 !== num2){
        iguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${iguais} são iguais.`
}

function segundaFrase(num1, num2);{
    const soma = num1 + num2;

    let res10 = 'menor';
    let res20 = 'menor';

    const comp10 = soma > 10;
    const comp20 = soma > 20;

    if(comp10){
        res10 = 'maior'
    }

    if(comp20){
        res20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${res10} que 10 e ${res20} que 20.`
}
console.log(compNum(10, 30));