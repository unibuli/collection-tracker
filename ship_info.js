
export class ShipCodex {

    constructor(){

        this.AllShips = new Set()

        this.MapDrops = new Set()
        this.ConstructionPool = new Set()
        this.RequisitionPool = new Set()
        this.ResearchShips = new Set()
        this.GuildShop = new Set()
        this.MeritShop = new Set()
        this.CoreDataExchange = new Set()
        this.WarArchives = new Set()


        this.learnMapDrops()


    }


    learnMapDrops(){

        const Chapter01 = ["Comet", "Craven", "Crescent", "Cygnet", "McCall"]
        const Chapter02 = []
        const Chapter03 = []
        const Chapter04 = []
        const Chapter05 = []

        const Chapter06 = []
        const Chapter07 = []
        const Chapter08 = []
        const Chapter09 = []
        const Chapter10 = []

        const Chapter11 = []
        const Chapter12 = []
        const Chapter13 = []
        const Chapter14 = []


        const AllChapters = [
            Chapter01, 
            Chapter02, 
            Chapter03,
            Chapter04,
            Chapter05,
            Chapter06,
            Chapter07,
            Chapter08,
            Chapter09,
            Chapter10,
            Chapter11,
            Chapter12,
            Chapter13,
            Chapter14,
        ]

        for(const Chapter of AllChapters){
            for(const shipname of Chapter){
                this.MapDrops.add(shipname)
            }
        }

        console.log(this.MapDrops)
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

            case "Core Data Exchange":
                return this.CoreDataExchange.has(shipname);

            case "War Archives":
                return this.MapDrops.has(shipname);

            default:
                return this.MapDrops.has(shipname);
        }
    }
}





