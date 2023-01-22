

const ShowCollectedBtn = document.querySelector('.collected-toggle')

const collected = new Set()


ShowCollectedBtn.addEventListener("click", () => toggleCollectionDisplay())


addShipTileListeners()
readFromLocalStorage()
applyCollectionState()
initializeFilters()

function initializeFilters(){

    const filters = document.querySelectorAll('.filter-tile')

    for(const filter of filters){

        filter.classList.add('filter-active')

        filter.addEventListener("click", () => {
            filter.classList.toggle('filter-active')
            filterDisplayedShips()
        })
    }

}

function filterDisplayedShips(){

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
            if(shipMeetsCriteria(shipname, criteria)){
                ship.classList.remove('hide-filter')
                break
            }
        }
    }
}

function shipMeetsCriteria(shipname, criteria){

    switch(criteria){
        case "Map Drop":
            return false;
        case "Construction":
            return false;
        case "Requisition":
            return false;
        case "Research":
            return false;
        case "Guild Shop":
            return false;
        case "Merit Shop":
            return false;
        case "Exchange Shop":
            return false;
        case "Core Shop":
            return false;
        default:
            return false
    }
}


function readFromLocalStorage(){

    const knownCollection = JSON.parse(localStorage.getItem("user_collection"))

    console.log(knownCollection)

    if(knownCollection){
        for(const shipname of knownCollection){
            addToCollection(shipname)
        }
    }    
}


function updateLocalStorage(){

    const collectedNames = collected.values()
    console.log(collectedNames)

    const namesArray = []
    for(const shipname of collectedNames){
        namesArray.push(shipname)
    }

    localStorage.setItem("user_collection", JSON.stringify(namesArray))

}



function applyCollectionState(){

    const allships = document.querySelectorAll('.ship-tile')
    for(const tile of allships){
        const shipname = tile.innerText
        if(collected.has(shipname)){
            tile.classList.add('collected')
        }
    }
}




function addToCollection(shipname){

    collected.add(shipname)
    console.log(collected)
    updateLocalStorage()
}

function removeFromCollection(shipname){

    if(collected.has(shipname)){
        collected.delete(shipname)
    }
    console.log(collected)
    updateLocalStorage()
}


function addShipTileListeners(){

    const allships = document.querySelectorAll('.ship-tile')
    for(const tile of allships){
        tile.addEventListener("click", () => {

            const shipname = tile.innerText
            tile.classList.toggle('collected')

            if(tile.classList.contains('collected')){
                addToCollection(shipname)
            } else {
                removeFromCollection(shipname)
            }
        })
    }
}


function toggleCollectionDisplay(){

    const allships = document.querySelectorAll('.ship-tile')
    for(const tile of allships){
        tile.classList.toggle('hide-collected')
    }
}


