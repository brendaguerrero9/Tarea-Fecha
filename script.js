var usuario = {
    nombre: "Brenda Guerrero",
    cumple: new Date(1998, 21, 10)
};

// Funcion que genera el calculo de la edad
function calcular(cumple) {
    var fActual = new Date(Date.now());
    var edad = fActual.getUTCFullYear() - cumple.getUTCFullYear();

    if(cumple.getMonth() < fActual.getMonth()){
        
    }else if(fActual.getMonth() == cumple.getMonth()){

        if(cumple.getDate() <= fActual.getDate()){
            console("ERROR!!!");
        }else{
            edad = edad - 1;
        }
    }else{
        edad = edad - 1;
    }

    return edad;
}
