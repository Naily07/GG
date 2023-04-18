export function removeSuggestion(){
    const elements = document.querySelectorAll(".possible")
    console.log("elements", elements);
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("possible")
        // console.log("i", i);
        // console.log("Elements i", elements[i].classList);
    }
}