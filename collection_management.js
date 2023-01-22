

// manages how ships are added to & from collection state

import { ShipCodex } from "./ship_info.js"


export class ShipCollectionManager {

    constructor(){

        this.collected = new Set()
        this.codex = new ShipCodex()


        this.spawnTiles()

        this.addShipTileListeners()
        this.readFromLocalStorage()
        this.applyCollectionState()

    }

    spawnTiles(){

        const normalBox = document.getElementById('normalbox')
        const rareBox = document.getElementById('rarebox')
        const eliteBox = document.getElementById('elitebox')
        const superBox = document.getElementById('superbox')

        for(const shipname of this.codex.getKnownShips()){

            const rarity = this.codex.getShipRarity(shipname)
            const tile = document.createElement("button")
            tile.classList.add("ship-tile")

            tile.innerText = shipname

            console.log(rarity)

            switch (rarity){
                case "Normal":
                    normalBox.appendChild(tile)
                    break

                case "Rare":
                    rareBox.appendChild(tile)
                    break

                case "Elite":
                    eliteBox.appendChild(tile)
                    break

                case "Super":
                    superBox.appendChild(tile)
                    break
            }
        }
    }

    readFromLocalStorage(){

        const knownCollection = JSON.parse(localStorage.getItem("user_collection"))
    
        console.log(knownCollection)
    
        if(knownCollection){
            for(const shipname of knownCollection){
                this.addToCollection(shipname)
            }
        }    
    }
    
    
    updateLocalStorage(){
    
        const collectedNames = this.collected.values()
        console.log(collectedNames)
    
        const namesArray = []
        for(const shipname of collectedNames){
            namesArray.push(shipname)
        }
    
        localStorage.setItem("user_collection", JSON.stringify(namesArray))
    
    }
    
    applyCollectionState(){
    
        const allships = document.querySelectorAll('.ship-tile')
        for(const tile of allships){
            const shipname = tile.innerText
            if(this.collected.has(shipname)){
                tile.classList.add('collected')
            }
        }
    }
    
    addToCollection(shipname){
    
        this.collected.add(shipname)
        console.log(this.collected)
        this.updateLocalStorage()
    }
    
    removeFromCollection(shipname){
    
        if(this.collected.has(shipname)){
            this.collected.delete(shipname)
        }
        console.log(this.collected)
        this.updateLocalStorage()
    }
    
    
    addShipTileListeners(){
    
        const allships = document.querySelectorAll('.ship-tile')
        for(const tile of allships){
            tile.addEventListener("click", () => {
    
                const shipname = tile.innerText
                tile.classList.toggle('collected')
    
                if(tile.classList.contains('collected')){
                    this.addToCollection(shipname)
                } else {
                    this.removeFromCollection(shipname)
                }
            })
        }
    }

}




