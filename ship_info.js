
import { getMapDrops } from "./ship_data/map_drops.js"
import { getCoreDataShips, getGuildShips, getMeritShips } from "./ship_data/shop_offerings.js"
import { getConstructionPool } from "./ship_data/construction_pool.js"
import { getRequisitionShips, getMedalShopShips } from "./ship_data/requisition.js"
import { getResearchShips } from "./ship_data/research_ships.js"
import { getWarArchivesShips } from "./ship_data/war_archives.js"

export class ShipCodex {

    constructor() {

        this.AllShips = new Set()
        this.compileShipSources()
    }

    compileShipSources() {

        this.MapDrops = new Set()
        this.learnShipSource(getMapDrops(), this.MapDrops)

        this.ConstructionPool = new Set()
        this.learnShipSource(getConstructionPool(), this.ConstructionPool)

        this.CoreDataExchange = new Set()
        this.learnShipSource(getCoreDataShips(), this.CoreDataExchange)

        this.GuildShop = new Set()
        this.learnShipSource(getGuildShips(), this.GuildShop)

        this.MeritShop = new Set()
        this.learnShipSource(getMeritShips(), this.MeritShop)

        this.RequisitionPool = new Set()
        this.learnShipSource(getRequisitionShips(), this.RequisitionPool)

        this.MedalShips = new Set()
        this.learnShipSource(getMedalShopShips(), this.MedalShips)

        this.ResearchShips = new Set()
        this.learnShipSource(getResearchShips(), this.ResearchShips)

        this.WarArchives = new Set()
        this.learnShipSource(getWarArchivesShips(), this.WarArchives)
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
                return this.MedalShips.has(shipname);

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

            case "Limited":
                const categories = ["Map Drop", "Construction", "Requisition", "Medal Shop", "Merit Shop", "Guild Shop", "Core Data", "Research", "War Archives"]
                for (const criteria of categories){
                    if (this.shipIsAvailable(shipname, criteria)){
                        return false
                    }
                }
                return true;

            default:
                return false;
        }
    }
}

