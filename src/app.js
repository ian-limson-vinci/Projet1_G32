class Main {
    simpleMinutes(minutes) {
        const lampsOn = minutes % 4;
        return ['O','O','O','O'].map((lamp, index) => (index < lampsOn ? 'Y' : lamp)).join(' ');
    }

    fiveMinutesBlocks(minutes) {
        const lamps = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
        const lampsOn = Math.floor(minutes/5);
        for (let i=0; i < lampsOn; i++) {
            lamps[i] = (i+1) % 3 === 0 ? 'R' : 'Y';
        }
        return lamps.join(' ');
    }
}

module.exports = { Main };
