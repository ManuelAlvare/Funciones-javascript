function edad(a) {
    if(a<13) {
        return 'niño';
    } else {
        if(13<=a && a<=18){
            return 'adolescente';
        } else {
            if(18<a && a<=65) {
                return 'adulto';
            } else {
                return 'mayor';
            }
        }
    }
}
let rese = edad(6);
console.log('Una persona de 6 años es '+rese);
