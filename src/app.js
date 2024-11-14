 class Main {
    

















 heureSimple(hours) {
    let ampoules = '0000';

    for (let i = 0; i < hours; i++) {
        ampoules = ampoules.substr(0, i) + '1' + ampoules.substr(i + 1); // Remplacer '0' par '1' pour chaque heure
    }
  
    return ampoules;
}
  
}

module.exports ={Main, simpleHeure};
