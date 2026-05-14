function fnChangeBorder(Id,notID,notID2) {
    document.getElementById(Id).style.border = "solid black";
    document.getElementById(notID).style.border = "none";
    document.getElementById(notID2).style.border = "none";
    document.getElementById(Id).querySelector('input[type="radio"]').checked = true;
}
