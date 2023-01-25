

export function getWarArchivesShips() {

    const exShips = getArchiveShipsEX()
    const spShips = getArchiveShipsSP()

    const allShips = []
    for (const type of [exShips, spShips]) {
        for (const shipname of type) {
            allShips.push(shipname)
        }
    }

    return allShips
}

function getArchiveShipsEX() {

    const events = []

    const visitorsDyedInRed = ["Zuikaku", "Akatsuki"]
    events.push(visitorsDyedInRed)

    const fallenWings = ["North Carolina", "West Virginia", "Wasp"]
    events.push(fallenWings)

    const wintersCrown = ["Duke of York", "Musketeer", "Fiji", "Jamaica"]
    events.push(wintersCrown)

    const divergentChessboard = ["Z46", "Prinz Eugen", "Z35", "Deutschland", "Admiral Hipper", "Scharnhorst", "Gneisenau", "Z19", "Z20", "Z21"]
    events.push(divergentChessboard)

    const irisOfLightAndDark = ["Le Triomphant", "Le Mars"]
    events.push(irisOfLightAndDark)

    const inkStainedSteelSakura = ["Kawakaze", "Kongou", "Ooshio"]
    events.push(inkStainedSteelSakura)

    const crimsonEchoes = ["Kaga (Battleship)", "Hatakaze"]
    events.push(crimsonEchoes)

    const scherzoOfIronAndBlood = ["King George V", "Gneisenau", "Scharnhorst", "Echo"]
    events.push(scherzoOfIronAndBlood)

    const empyrealTragicomedy = ["Littorio", "Conte di Cavour"]
    events.push(empyrealTragicomedy)

    const ashenSimulacrum = ["Cavalla", "Aylwin"]
    events.push(ashenSimulacrum)

    const swirlingCherryBlossoms = ["Noshiro"]
    events.push(swirlingCherryBlossoms)

    const allShips = []
    for (const event of events) {
        for (const shipname of event) {
            allShips.push(shipname)
        }
    }

    return allShips
}

function getArchiveShipsSP() {

    // some of these events don't drop ships

    const events = []

    const striveWishAndStrategize = ["Prince of Wales", "Vampire"]
    events.push(striveWishAndStrategize)

    const encirclingGrafSpee = []

    const gloriousBattle = ["Glorious", "Ardent"]
    events.push(striveWishAndStrategize)

    const moonlitOverture = []

    const passionatePolaris = []

    const theSolomonRanger = []

    const universeInUnison = []

    const theEnigmaAndTheShark = []

    const allShips = []
    for (const event of events) {
        for (const shipname of event) {
            allShips.push(shipname)
        }
    }

    return allShips
}

