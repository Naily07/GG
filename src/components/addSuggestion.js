function allentours(classElement){
    console.log("Classsee", classElement[0].classList[1]);
    switch (classElement[0].classList[1]) {
        case"1":
            change(["2", "4", "5"])
            break
        case"2":
            change(["1", "3", "5"])
            break
        case"3":
            change(["2", "6", "5"])
            break
        case"4":
            change(["1", "5", "7"])
            break
        case"5":
            change(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
        break
        case"6":
            change(["3", "5", "9"])
            break
        case"7":
            change(["4", "5", "8"])
            break
        case"8":
            change(["7", "5", "9"])
            break
        case "9":
            change(["6", "5", "8"])
            break;
        default:
            break;
    }
}

function change(arrayPosition){
    arrayPosition.forEach(element => {
        const e = document.getElementsByClassName(element)
            if(e[0].childNodes.length === 0){
                e[0].classList.add("possible")
            }
    });
}

export function addSuggestion(position) {
    const element = document.getElementsByClassName(position)
    allentours(element)
}