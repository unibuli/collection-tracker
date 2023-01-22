
export function shipMeetsCriteria(shipname, criteria){

    switch(criteria){
        case "Map Drop":
            return true;
        case "Construction":
            return true;
        case "Requisition":
            return true;
        case "Research":
            return true;
        case "Guild Shop":
            return true;
        case "Merit Shop":
            return true;
        case "Exchange Shop":
            return true;
        case "Core Shop":
            return true;
        default:
            return true
    }
}
