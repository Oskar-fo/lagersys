function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

document.getElementById("leggTil").addEventListener("click", function () {
    let nyttElement = document.getElementById("nyttElement").value.trim();

    if (nyttElement !== "") {
        let liste = document.getElementById("liste");
        let li = document.createElement("li");
        li.textContent = capitalizeFirstLetter(nyttElement);
        liste.appendChild(li);
        document.getElementById("nyttElement").value = "";
    } else {
        alert("Skriv inn noe for å legge til i listen!");
    }
});

document.getElementById("sorter").addEventListener("click", function () {
    let listeElementer = document.querySelectorAll("#liste li");

    let sortertArray = Array.from(listeElementer)
        .map(li => li.textContent)
        .sort();

    let liste = document.getElementById("liste");
    liste.innerHTML = "";

    sortertArray.forEach(tekst => {
        let nyttElement = document.createElement("li");
        nyttElement.textContent = tekst;
        liste.appendChild(nyttElement);
    });
});

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
