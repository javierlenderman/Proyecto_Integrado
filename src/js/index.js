function showFilters(ID) {
    if (document.getElementById(ID).style.display != "none") {
        document.getElementById(ID).style.display = "none";
    } else {
        document.getElementById(ID).style.display = "flex";
    }
}