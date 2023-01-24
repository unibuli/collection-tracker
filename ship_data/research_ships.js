
export function getResearchShips() {

    const pr1 = [
        "Neptune",
        "Monarch",
        "Ibuki",
        "Izumo",
        "Roon",
        "Saint Louis",
    ]

    const pr2 = [
        "Seattle",
        "Georgia",
        "Kitakaze",
        "Azuma",
        "Friedrich der Grobe",
        "Gascogne",
    ]

    const pr3 = [
        "Cheshire",
        "Drake",
        "Mainz",
        "Odin",
        "Champagne",
    ]

    const pr4 = [
        "Anchorage",
        "Hakuryuu",
        "Agir",
        "August von Parseval",
        "Marco Polo",
    ]

    const pr5 = [
        "Plymouth",
        "Prinz Rupprecht",
        "Harbin",
        "Chkalov",
        "Brest",
    ]

    const researchSeries = [pr1, pr2, pr3, pr4, pr5]

    const allShips = []
    for (const series of researchSeries) {

        for (const shipname of series) {
            allShips.push(shipname)
        }
    }

    return allShips
}
