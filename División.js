function division(a,b) {
    if(b==0) {
        return 'infinito';
    } else {
        return a/b;
    }
}
let resd = division(6,3);
console.log('El resultado de dividir 6 entre 3 es '+resd);
