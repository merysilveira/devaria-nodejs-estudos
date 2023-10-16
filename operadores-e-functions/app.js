const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
        const resultado = Number.parseFloat(numero);
        if (!resultado) {
            console.log('Número informado não é válido!');
        }
        return resultado;
};

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador
        default:
            console.log('Operador informado não é válido!');
            return null;
    }
};

readline.question('Favor informar um número: ', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if (numeroValidado1) {
        readline.question('Favor informar outro número: ', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if (numeroValidado2) {
                readline.question('Favor informar o operador: ', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado) {
                        switch (operadorValidado) {
                            case '+':
                                console.log(`Adição = Resultado: ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-':
                                console.log(`Subtração = Resultado: ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '*':
                                console.log(`Multiplicação = Resultado: ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '/':
                                console.log(`Divisão = Resultado: ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '%':
                                console.log(`Resto = Resultado: ${numeroValidado1 % numeroValidado2}`);
                                break;
                            default:
                                break;
                        }
                    }
                });
            }
        });
    }

});