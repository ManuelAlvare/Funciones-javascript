function paridad(a) {
    if(a%2==0) {
        return 'par';
    } else {
        return 'impar';
    }
}
let respa = paridad(17);
console.log('El número 17 es '+respa);
