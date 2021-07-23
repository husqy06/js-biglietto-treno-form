var btnGenera = document.getElementById("genera");

btnGenera.addEventListener("click",
    function() {

        var nome = document.getElementById("nome").value;
        document.getElementById('name-ticket').innerHTML = nome;

        var km = document.getElementById("km").value;
        var eta = document.getElementById("eta").value;

        if(eta == "minorenne") {
            document.getElementById("offer").innerHTML = "Sconto minorenne";
            document.getElementById("price").innerHTML = Math.floor(((km * 0.21) / 100) * 80 ) + " €";
        } else if(eta == "maggiorenne") {
            document.getElementById("offer").innerHTML = "Biglietto standard";
            document.getElementById("price").innerHTML = Math.floor(km * 0.21) + " €";
        } else {
            document.getElementById("offer").innerHTML = "Sconto over 65";
            document.getElementById("price").innerHTML = Math.floor(((km * 0.21) / 100) * 60 ) + " €";
        }

        document.getElementById("carriage").innerHTML = Math.floor(Math.random() * 31) ;

        var min = 90000;
        var max = 100000;
        document.getElementById("codex").innerHTML = Math.floor(Math.random() * (max - min ) + min) ;

        var biglietto = document.getElementById("biglietto");
        biglietto.style.display = "block";
    } 
)

var btnAnnulla = document.getElementById("annulla");

btnAnnulla.addEventListener("click",
    function() {
        biglietto = document.getElementById("biglietto");
        biglietto.style.display = "none";
        
        document.getElementById("nome").value = " ";
        document.getElementById("km").value = " ";
        document.getElementById("eta").value = " ";
    }
)
