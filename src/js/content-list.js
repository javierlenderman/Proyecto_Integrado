function Display(Id,Type) {
    if (Type == "rows") {
        document.getElementById(Id).style.backgroundImage = "linear-gradient(to right, #414141 50%, white 50%)";
    } else if (Type == "blocks") {
        document.getElementById(Id).style.backgroundImage = "linear-gradient(to right, white 50%, #414141 50%)";
    }
    
}
