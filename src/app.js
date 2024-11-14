 class Main {
    

















heureSimple(hours){
    return '1'.repeat(hours) + '0'.repeat(4 - hours);
}

cinqHeure(hours){
    let ampoules2 = '0000';

    const allumees = Math.floor(hours / 5);

    for (let i = 0; i < allumees; i++) {
        ampoules2 = ampoules2.substring(0, i) + '1' + ampoules2.substring(i + 1);
    }

    return ampoules2;



}
}

module.exports = { cinqHeure };
module.exports = { heureSimple };
module.exports ={Main};
