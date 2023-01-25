

export function rebuildStats(){

    const allTiles = document.querySelectorAll(".ship-tile")
    var collected = 0
    var total = 0

    for(const tile of allTiles){
        if(!tile.classList.contains("hide-filter")){
            total += 1
            if(tile.classList.contains("collected")){
                collected += 1
            }
        }
    }

    updateDisplay(collected, total)
}

function updateDisplay(collected, total){

    const percentage = (total == 0) ? 0 : 100*collected/total
    const displayValue = percentage.toFixed(1)

    const title = document.getElementById("collection-stats")
    title.innerText = `${collected}/${total} (${displayValue}%)`
}