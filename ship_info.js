

import { GetMapDrops } from "./ship_data/map_drops.js"
import { GetCoreDataShips, GetGuildShips, GetMeritShips } from "./ship_data/shop_offerings.js"
import { GetUltraRareShips, GetSuperRareShips, GetEliteShips, GetRareShips, GetNormalShips } from "./ship_data/rarity_info.js"
import { GetConstructionPool } from "./ship_data/construction_pool.js"

export class ShipCodex {

    constructor() {

        this.AllShips = new Set()

        this.MapDrops = new Set()
        this.GuildShop = new Set()
        this.MeritShop = new Set()
        this.CoreDataExchange = new Set()

        this.ConstructionPool = new Set()
        this.RequisitionPool = new Set()
        this.ResearchShips = new Set()
        this.WarArchives = new Set()

        this.KnownRarities = ["Normal", "Rare", "Elite", "Ultra Rare", "Super Rare"]
        this.RarityNormal = new Set()
        this.RarityRare = new Set()
        this.RarityElite = new Set()
        this.RaritySuperRare = new Set()
        this.RarityUltraRare = new Set()

        this.LoadRarityInfo()
        this.LearnShipSources()
    }

    LearnShipSources() {

        this.learnMapDrops()

        this.LearnShipSource(GetConstructionPool(), this.ConstructionPool)
        this.LearnShipSource(GetCoreDataShips(), this.CoreDataExchange)
        this.LearnShipSource(GetGuildShips(), this.GuildShop)
        this.LearnShipSource(GetMeritShips(), this.MeritShop)
    }

    LearnShipSource(source, destination) {

        this.addShipsToSet(source, destination)
        this.addShipsToSet(source, this.AllShips)
    }

    LoadRarityInfo() {

        this.addShipsToSet(GetNormalShips(), this.RarityNormal)
        this.addShipsToSet(GetRareShips(), this.RarityRare)
        this.addShipsToSet(GetEliteShips(), this.RarityElite)
        this.addShipsToSet(GetSuperRareShips(), this.RaritySuperRare)
        this.addShipsToSet(GetUltraRareShips(), this.RarityUltraRare)
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

    getKnownShips() {

        const result = []
        for (const ship of this.AllShips.keys()) {
            result.push(ship)
        }
        result.sort()

        return result
    }

    learnMapDrops() {

        const AllChapters = GetMapDrops()
        for (const Chapter of AllChapters) {
            this.LearnShipSource(Chapter, this.MapDrops)
        }
    }

    addShipsToSet(ships, destination) {

        for (const shipname of ships) {
            destination.add(shipname)
        }
    }

    shipIsAvailable(shipname, criteria) {

        switch (criteria) {

            case "Map Drop":
                return this.MapDrops.has(shipname);

            case "Construction":
                return this.ConstructionPool.has(shipname);

            case "Requisition":
                return this.RequisitionPool.has(shipname);

            case "Research":
                return this.ResearchShips.has(shipname);

            case "Guild Shop":
                return this.GuildShop.has(shipname);

            case "Merit Shop":
                return this.MeritShop.has(shipname);

            case "Core Data":
                return this.CoreDataExchange.has(shipname);

            case "War Archives":
                return this.WarArchives.has(shipname);

            default:
                return this.MapDrops.has(shipname);
        }
    }
}

