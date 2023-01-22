

// manages how ships are added to & from collection state


export class ShipCollectionManager {

    constructor(){

        this.collected = new Set()

        this.addShipTileListeners()
        this.readFromLocalStorage()
        this.applyCollectionState()

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




