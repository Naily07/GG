export function testWin(Arrayposition){
    const a = Arrayposition[0]
    console.log("aa", a);
    switch (a) {
        case "1":
            if((Arrayposition.indexOf("4") !== -1 && Arrayposition.indexOf("7") !==-1) || 
                (Arrayposition.indexOf("5") !== -1 && Arrayposition.indexOf("9")!==-1))
                return true
            break;
        case "2":
            if((Arrayposition.indexOf("5") !== -1 && Arrayposition.indexOf("8")!==-1))
                return true
            break;
        
        case "3":
            if((Arrayposition.indexOf("5") !== -1 && Arrayposition.indexOf("7")!==-1) ||
                (Arrayposition.indexOf("6") !== -1 && Arrayposition.indexOf("9")!==-1))
                return true
            break;
            
        case "4":
            if((Arrayposition.indexOf("5") !== -1 && Arrayposition.indexOf("6")!==-1)||
            (Arrayposition.indexOf("1") !== -1 && Arrayposition.indexOf("7")!==-1))
                return true
            break;
            
        case "5":
            if((Arrayposition.indexOf("1") !== -1 && Arrayposition.indexOf("9")!==-1)||
                (Arrayposition.indexOf("2") !== -1 && Arrayposition.indexOf("8")!==-1)||
                (Arrayposition.indexOf("7") !== -1 && Arrayposition.indexOf("3")!==-1)||
                (Arrayposition.indexOf("4") !== -1 && Arrayposition.indexOf("6")!==-1))
                return true
            break;
            
        case "6":
            if((Arrayposition.indexOf("3") !== -1 && Arrayposition.indexOf("9")!==-1)||
            (Arrayposition.indexOf("4") !== -1 && Arrayposition.indexOf("5")!==-1))
                return true
            break;
            
        case "7":
            if((Arrayposition.indexOf("1") !== -1 && Arrayposition.indexOf("4")!==-1)||
            (Arrayposition.indexOf("5") !== -1 && Arrayposition.indexOf("3")!==-1))
                return true
            break;
            
        case "8":
            if((Arrayposition.indexOf("2") !== -1 && Arrayposition.indexOf("5")!==-1))
                return true
            break;
            
        case "9":
            if((Arrayposition.indexOf("1") !== -1 && Arrayposition.indexOf("5")!==-1)||
            (Arrayposition.indexOf("3") !== -1 && Arrayposition.indexOf("6")!==-1))
                return true
            break;
            
        default:
            return false
            break;
    }
}