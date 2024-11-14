 class Main {
    

















heureSimple(hours){
    return '1'.repeat(hours) + '0'.repeat(4 - hours);
}

cinqHeure(hours) {
    return '1'.repeat(Math.floor(hours / 5)) + '0'.repeat(4 - Math.floor(hours / 5));
  }
}

module.exports = { cinqHeure };
module.exports = { heureSimple };
module.exports ={Main};
