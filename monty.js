

let playGame = (switchChoice) => {
    let doorWithCar = Math.floor(Math.random() * 3);
    let selectedDoor = Math.floor(Math.random() * 3);
    let revealedDoor = [0,1,2].find((door) => door !== doorWithCar && door !== selectedDoor);

    if(switchChoice) {
        return doorWithCar === [0,1,2].find((d) => d != selectedDoor && d != revealedDoor);
    } else {
        return doorWithCar == selectedDoor;
    }
}

let runTrials = (trials, switchChoice) => {
    let winners = 0;
    for(i=0; i < trials; i++) {
        let result = playGame(switchChoice);
        if(result) {
            winners++;
        }
    }

    return winners;
}


console.log('play 10000 with no switch of door');
let trials = 10000;
console.log(`won ${runTrials(trials, false)} times out of ${trials}`);
console.log('play 10000 with switch of door');
console.log(`won ${runTrials(trials, true)} times out of ${trials}`);