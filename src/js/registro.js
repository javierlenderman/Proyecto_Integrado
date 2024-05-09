function Checked(Titan,Hunter,Warlock) {
    if (document.getElementById(Titan).checked){
        document.getElementById("Titan-Label").style.backgroundColor = "rgb(255, 0, 0, 0.5)";
        document.getElementById("Hunter-Label").style.backgroundColor = "rgb(0, 0, 0, 0)";
        document.getElementById("Warlock-Label").style.backgroundColor = "rgb(0, 0, 0, 0)";
    } else if (document.getElementById(Hunter).checked) {
        document.getElementById("Titan-Label").style.backgroundColor = "rgb(0, 0, 0, 0)";
        document.getElementById("Hunter-Label").style.backgroundColor = "rgb(0, 209, 255, 0.5)";
        document.getElementById("Warlock-Label").style.backgroundColor = "rgb(0, 0, 0, 0)";
    } else if (document.getElementById(Warlock).checked) {
        document.getElementById("Titan-Label").style.backgroundColor = "rgb(0, 0, 0, 0)";
        document.getElementById("Hunter-Label").style.backgroundColor = "rgb(0, 0, 0, 0)";
        document.getElementById("Warlock-Label").style.backgroundColor = "rgb(255, 214, 0, 0.5)";
    }
    
}
