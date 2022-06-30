function arrayValido(arr, num){
    try {
        if (!arr && num) throw new ReferenceError('Envie os parâmetros');

        if (typeof arr !== 'object')
            throw new TypeError ('É necessário um array do tipo object');

        if (typeof num !== 'number')
            throw new TypeError ('É necessário num ser do tipo number');
        
        if(arr.legth !== num) throw new RangeError ('Este tamanho é inválido');

        return arr;
    } catch (e){
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError');
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError');
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError');
            console.log(e.message);
        } else {
            console.log('Este tipo de erro não era esperado' + e);
        }
    }
}

console.log (arrayValido(20, 5));