

import { ShipCollectionManager } from './collection_management.js';
import { initializeFilters, toggleCollectionDisplay } from './filters.js';


const ShowCollectedBtn = document.querySelector('.collected-toggle')
ShowCollectedBtn.addEventListener("click", () => toggleCollectionDisplay())

new ShipCollectionManager()

initializeFilters()
