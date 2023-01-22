

import { GetMapDrops } from "./ship_data/map_drops.js"
import { GetCoreDataShips, GetGuildShips, GetMeritShips } from "./ship_data/shop_offerings.js"


export class ShipCodex {

    constructor(){

        this.AllShips = new Set()

        this.MapDrops = new Set()
        this.GuildShop = new Set()
        this.MeritShop = new Set()
        this.CoreDataExchange = new Set()

        this.ConstructionPool = new Set()
        this.RequisitionPool = new Set()
        this.ResearchShips = new Set()
        this.WarArchives = new Set()

        this.learnMapDrops()
        this.addShipsToSet(GetCoreDataShips(), this.CoreDataExchange)
        this.addShipsToSet(GetGuildShips(), this.GuildShop)
        this.addShipsToSet(GetMeritShips(), this.MeritShop)

        console.log(this.MeritShop)
    }

    getShipRarity(shipname){

        console.log(shipname.charAt(0))

        if(shipname.charAt(0) == 'A'){
            return "Normal"
        }

        if(shipname.charAt(0) == 'F'){
            return "Rare"
        }

        if(shipname.charAt(0) == 'M'){
            return "Elite"
        }

        if(shipname.charAt(0) == 'R'){
            return "Super"
        }

        return "Super"
    }

    getKnownShips(){

        const result = []
        for(const ship of this.AllShips.keys()){
            result.push(ship)
        }

        return result
    }

    learnMapDrops(){

        const AllChapters = GetMapDrops()
        for(const Chapter of AllChapters){
            this.addShipsToSet(Chapter, this.MapDrops)
        }
    }

    addShipsToSet(ships, destination){

        for(const shipname of ships){
            destination.add(shipname)
            this.AllShips.add(shipname)
        }
    }

    shipIsAvailable(shipname, criteria){

        switch(criteria){

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

