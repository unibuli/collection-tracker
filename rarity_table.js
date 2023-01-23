

import { GetUltraRareShips, GetSuperRareShips, GetEliteShips, GetRareShips, GetNormalShips } from "./ship_data/rarity_info.js"

export class RarityTable {

    constructor() {

        this.KnownRarities = ["Normal", "Rare", "Elite", "Ultra Rare", "Super Rare"]
        this.RarityNormal = new Set()
        this.RarityRare = new Set()
        this.RarityElite = new Set()
        this.RaritySuperRare = new Set()
        this.RarityUltraRare = new Set()

        this.LoadRarityInfo()
    }

    LoadRarityInfo() {

        this.addShipsToSet(GetNormalShips(), this.RarityNormal)
        this.addShipsToSet(GetRareShips(), this.RarityRare)
        this.addShipsToSet(GetEliteShips(), this.RarityElite)
        this.addShipsToSet(GetSuperRareShips(), this.RaritySuperRare)
        this.addShipsToSet(GetUltraRareShips(), this.RarityUltraRare)
    }

    addShipsToSet(ships, destination) {

        for (const shipname of ships) {
            destination.add(shipname)
        }
    }

    shipIsOfRarity(shipname, rarity) {

        switch (rarity) {
            case "Normal":
                return this.RarityNormal.has(shipname)

            case "Rare":
                return this.RarityRare.has(shipname)

            case "Elite":
                return this.RarityElite.has(shipname)

            case "Super Rare":
                return this.RaritySuperRare.has(shipname)

            case "Ultra Rare":
                return this.RarityUltraRare.has(shipname)
        }
    }

    getShipRarity(shipname) {

        for (const rarity of this.KnownRarities) {
            if (this.shipIsOfRarity(shipname, rarity)) {
                return rarity
            }
        }

        console.log(`Error: Couldn't find rarity for ship: ${shipname}`)
        return "Normal"
    }
}


