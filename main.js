

import { ShipCollectionManager } from './collection_management.js';
import { FilterManager } from './filters.js';



const ShowCollectedBtn = document.querySelector('.collected-toggle')
ShowCollectedBtn.addEventListener("click", () => toggleCollectionDisplay())

function toggleCollectionDisplay(){

    const allships = document.querySelectorAll('.ship-tile')
    for(const tile of allships){
        tile.classList.toggle('hide-collected')
    }
}

new ShipCollectionManager()
new FilterManager()

