
import { ShipCodex } from './ship_info.js';

export class FilterManager {

    constructor(){

        this.codex = new ShipCodex()
        this.initializeFilters()
    }

    initializeFilters(){

        const filters = document.querySelectorAll('.filter-tile')
    
        for(const filter of filters){
    
            filter.classList.add('filter-active')
    
            filter.addEventListener("click", () => {
                filter.classList.toggle('filter-active')
                this.filterDisplayedShips()
            })
        }
    }

    filterDisplayedShips(){

        const filters = document.querySelectorAll('.filter-tile')
        const activeFilters = new Set()
    
        console.log(activeFilters)
    
        for(const filter of filters){
            if(filter.classList.contains('filter-active')){
                activeFilters.add(filter.innerText)
            }
        }
    
        const allships = document.querySelectorAll('.ship-tile')
    
        for(const ship of allships){
            ship.classList.add('hide-filter')
            const shipname = ship.innerText
        
            for(const criteria of activeFilters){
                if(this.codex.shipIsAvailable(shipname, criteria)){
                    ship.classList.remove('hide-filter')
                    break
                }
            }
        }
    }
}

