
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

        const Chapter_1 = [
            "Comet",
            "Craven",
            "Crescent",
            "Cygnet",
            "McCall",
            "Aulick",
            "Foote",
            "Foxhound",
            "Spence",
            "Cassin",
            "Downes",
            "Renown",
            "Long Island",
            "Repulse",
            "Leander",
            "Omaha",
            "Raleigh",
        ]
        
        const Chapter_2 = [
            "Ayanami",
            "Javelin",
            "Laffey",
            "London",
            "Z23",
            "California",
            "Juno",
            "Tennessee",
            "Bogue",
            "Hermes",
            "Pensacola",
            "Arizona",
            "Brooklyn",
            "Gridley",
            "Pennsylvania",
            "Shouhou",
            "Nevada",
            "Oklahoma",
            "Nelson",
            "Fletcher",
            "Norfolk",
            "Thatcher",
            "Lexington",
            "Rodney",
            "Achilles",
            "Ajax",
            "Kent",
            "Suffolk",
            "Beagle",
            "Bulldog",
        ]
        
        const Chapter_3 = [
            "Hiryuu",
            "Houston",
            "Souryuu",
            "Arethusa",
            "Chicago",
            "Galatea",
            "Northampton",
            "Langley",
            "Ranger",
            "Charles Ausburne",
            "Fortune",
            "Hammann",
            "Sims",
            "Karlsruhe",
            "Koln",
            "Konigsberg",
            "Indianapolis",
            "Kagerou",
            "Shiratsuyu",
            "Furutaka",
            "Kako",
            "Akagi",
            "Kaga",
            "Yorktown",
            "Portland",
        ]
        
        
        const Chapter_4 = [
            "Saratoga",
            "Phoenix",
            "Shiranui",
            "Shigure",
            "Shropshire",
            "Erebus",
            "Terror",
            "Cleveland",
            "Unicorn",
            "Amazon",
        ]
        
        const Chapter_5 = [
            "Helena",
            "Z1",
            "Myoukou",
            "Glowworm",
            "Queen Elizabeth",
            "Atlanta",
            "Juneau",
            "Hornet",
        ]
        
        const Chapter_6 = [
            "Vestal",
            "Ikazuchi",
            "Inazuma",
            "Exeter",
            "York",
            "Fusou",
            "Yamashiro",
            "Ark Royal",
            "Yuudachi",
        ]
        
        
        const Chapter_7 = [
            "Isuzu",
            "Houshou",
        ]
        
        const Chapter_8 = [
            "Abukuma",
            "Nachi",
            "Salt Lake City",
            "Maya",
            "Richmond",
        ]
        
        const Chapter_9 = [
            "Jenkins",
            "Radford",
            "Nicholas",
            "Niizuki",
        ]
        
        const Chapter_10 = [
            "Mikazuki",
            "Minazuki",
            "Honolulu",
            "St. Louis",
            "Jintsuu",
        ]
        
        const Chapter_11 = [
            "Agano",
            "Sendai",
            "Columbia",
        ]
        
        const Chapter_12 = [
            "Hiyou",
            "Junyou",
            "Choukai",
        ]
        
        const Chapter_13 = [
            "Dewey",
            "Bunker Hill",
        ]
        
        const Chapter_14 = [
            "Ashigara",
            "Denver",
            "West Virginia",
            "Michishio",
            "New Orleans",
            "Mogami",
        ]
        
        const AllChapters = [
            Chapter_1, 
            Chapter_2,
            Chapter_3, 
            Chapter_4,
            Chapter_5, 
            Chapter_6,
            Chapter_7, 
            Chapter_8,
            Chapter_9, 
            Chapter_10,
            Chapter_11, 
            Chapter_12,
            Chapter_13,
            Chapter_14,
        ]

        for(const Chapter of AllChapters){
            for(const shipname of Chapter){
                this.MapDrops.add(shipname)
                this.AllShips.add(shipname)
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

            case "Core Data":
                return this.CoreDataExchange.has(shipname);

            case "War Archives":
                return this.MapDrops.has(shipname);

            default:
                return this.MapDrops.has(shipname);
        }
    }
}

