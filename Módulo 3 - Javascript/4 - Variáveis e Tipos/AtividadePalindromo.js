function verificaPalindromo(string){
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for (let i = 0; i < string.legth / 2 ; i++) {
        if (string[i] !== string[string.legth - 1 -i]){
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2(rodador))