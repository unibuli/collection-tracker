

import { GetMapDrops } from "./ship_data/map_drops.js"
import { GetCoreDataShips, GetGuildShips, GetMeritShips } from "./ship_data/shop_offerings.js"
import { GetConstructionPool } from "./ship_data/construction_pool.js"

export class ShipCodex {

    constructor() {

        this.AllShips = new Set()

        // sources to add
        this.RequisitionPool = new Set()
        this.ResearchShips = new Set()
        this.WarArchives = new Set()

        this.compileShipSources()
    }

    compileShipSources() {

        this.MapDrops = new Set()
        for (const Chapter of GetMapDrops()) {
            this.learnShipSource(Chapter, this.MapDrops)
        }

        this.ConstructionPool = new Set()
        this.learnShipSource(GetConstructionPool(), this.ConstructionPool)

        this.CoreDataExchange = new Set()
        this.learnShipSource(GetCoreDataShips(), this.CoreDataExchange)

        this.GuildShop = new Set()
        this.learnShipSource(GetGuildShips(), this.GuildShop)

        this.MeritShop = new Set()
        this.learnShipSource(GetMeritShips(), this.MeritShop)
    }

    learnShipSource(source, destination) {

        this.addShipsToSet(source, destination)
        this.addShipsToSet(source, this.AllShips)
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

            case "Medal Shop":
                return false;

            case "Merit Shop":
                return this.MeritShop.has(shipname);

            case "Guild Shop":
                return this.GuildShop.has(shipname);

            case "Core Data":
                return this.CoreDataExchange.has(shipname);

            case "Research":
                return this.ResearchShips.has(shipname);

            case "War Archives":
                return this.WarArchives.has(shipname);

            case "Event/Collab":
                return false;

            default:
                return false;
        }
    }

    getKnownShips() {

        const result = []
        for (const ship of this.AllShips.keys()) {
            result.push(ship)
        }
        result.sort()

        return result
    }
}

