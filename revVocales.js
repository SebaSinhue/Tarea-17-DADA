/*Equipo 4*/
function revVocal(cadena, s){
    const vocales = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const pilaVocales = [];


    for (let c of cadena){
        if(vocales.has(c)){
            pilaVocales.push(c);
        }
    }

    let resultado = '';

    for(let c of cadena){
        if(vocales.has(c)){
            const vocalInvertida = pilaVocales.pop();
            resultado += vocalInvertida;
        } else {
            resultado += c;
        }

        return resultado;
    }
}
