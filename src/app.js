class Main {
    simpleMinutes(minutes) {
        const lamps = ['O', 'O', 'O', 'O'];
        const lampsOn = minutes % 4;

        for(let i=0; i<lampsOn; i++) {
            lamps[i] = 'Y';
        }

        return lamps.join(' ');
    }
}

module.exports = { Main };
