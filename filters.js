
import { ShipCodex } from './ship_info.js';

export class FilterManager {

    constructor() {

        this.codex = new ShipCodex()
        new CollectionToggler()

        this.activeFilters = new Set()
        this.initializeFilters()
        this.addResetButton()
        this.filterDisplayedShips()
    }

    addResetButton() {

        const ResetBtn = document.querySelector('.reset-filters')
        ResetBtn.addEventListener("click", () => {
            this.setAllFiltersTo("on")
            this.filterDisplayedShips()
        })
    }

    toggleCriteria(criteria) {

        if (this.activeFilters.has(criteria)) {
            this.activeFilters.delete(criteria)
        } else {
            this.activeFilters.add(criteria)
        }
    }

    setAllFiltersTo(choice) {

        const filters = document.querySelectorAll('.filter-tile')
        for (const filter of filters) {
            this.setFilterTo(filter, choice)
        }
    }

    setFilterTo(filter, choice) {

        switch (choice) {
            case "on":
                this.activateFilter(filter)
                return
            case "off":
                this.deactivateFilter(filter)
                return
        }
    }

    activateFilter(filter) {

        if (!filter.classList.contains('filter-active')) {
            filter.classList.toggle('filter-active')
            this.toggleCriteria(filter.innerText)
        }
    }

    deactivateFilter(filter) {

        if (filter.classList.contains('filter-active')) {
            filter.classList.toggle('filter-active')
            this.toggleCriteria(filter.innerText)
        }
    }

    initializeFilters() {

        const filters = document.querySelectorAll('.filter-tile')

        for (const filter of filters) {

            filter.classList.add('filter-active')
            this.toggleCriteria(filter.innerText)

            // left click
            filter.addEventListener("click", () => {
                filter.classList.toggle('filter-active')
                this.toggleCriteria(filter.innerText)
                this.filterDisplayedShips()
            })

            // right click
            filter.addEventListener("contextmenu", (e) => {
                e.preventDefault()
                this.setAllFiltersTo("off")
                filter.classList.toggle('filter-active')
                this.toggleCriteria(filter.innerText)
                this.filterDisplayedShips()
            })
        }
    }

    filterDisplayedShips() {

        const allships = document.querySelectorAll('.ship-tile')
        for (const ship of allships) {
            this.filterTile(ship)
        }
    }

    filterTile(ship) {

        const shipname = ship.innerText
        ship.classList.add('hide-filter')

        for (const criteria of this.activeFilters) {
            if (this.codex.shipIsAvailable(shipname, criteria)) {
                ship.classList.remove('hide-filter')
                return
            }
        }
    }
}

class CollectionToggler {

    constructor() {

        const ShowCollectedBtn = document.querySelector('.collected-toggle')
        ShowCollectedBtn.addEventListener("click", () => this.toggleCollectionDisplay())
    }

    toggleCollectionDisplay() {

        const allships = document.querySelectorAll('.ship-tile')
        for (const tile of allships) {
            tile.classList.toggle('hide-collected')
        }
    }
}