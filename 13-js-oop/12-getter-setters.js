class Program {
    constructor(programName) {
        this.programName = programName;
    }

    getProgramName() {
       return this.programName;
    }

    setProgramName(newName) {
        this.programName = newName;
    }
}

const program1 = new Program('SDET');

console.log(program1.getProgramName()); // SDET

program1.setProgramName('Developer');

console.log(program1.getProgramName()); // Developer






