export function canMove(lastPosition, newPosition){
    switch (lastPosition) {
        case "1":
            if(newPosition === "4" || newPosition === "2" || newPosition === "5"  )
                return true
            break;
        case "2":
            if(newPosition === "1" || newPosition === "3" || newPosition ==="5"  )
                return true
        break;
        case "3":
            if(newPosition === "2" || newPosition === "5" || newPosition === "6" )
                return true
        break;
        case "4":
            if(newPosition === "1" ||  newPosition === "5"  || newPosition === "7" )
            return true           
        break;
        case "5":
            if(newPosition !== "5")
                return true
        break;
        case "6":
            if(newPosition === "3" || newPosition === "5" ||newPosition==="9")
            return true
        break;
        case "7":
            if(newPosition === "5" || newPosition === "4" || newPosition === "8")
            return true
        break;
        case "8":
            if( newPosition === "5"  || newPosition === "7" || newPosition ==="9"  )
            return true
        break;
        case "9":
            if(newPosition === "5" || newPosition === "6" || newPosition === "8" )
                return true
        break;

        default:
            return false
    }
}