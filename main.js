function fib(valor) {
    if (valor > 2) {
        return (fib(valor - 1) + fib(valor - 2));
    }
    if (valor == 1) return 0;
    if (valor == 2) return 1;

}

function div(a, b) {
    return a / b;
}

console.log(fib(10));