class Main {
    simpleMinutes(minutes) {
        const lampsOn = minutes % 4;
        return ['O','O','O','O'].map((lamp, index) => (index < lampsOn ? 'Y' : lamp)).join(' ');
    }
}

module.exports = { Main };
