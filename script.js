function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

document.getElementById("leggTil").addEventListener("click", function () {
    let nyttElement = document.getElementById("nyttElement").value.trim();

    if (nyttElement !== "") {
        let liste = document.getElementById("liste");
        let li = document.createElement("li");
        li.textContent = capitalizeFirstLetter(nyttElement);

        let toggleButton = document.createElement("button");
        toggleButton.textContent = "Ledig";
        toggleButton.style.marginLeft = "50px";
        toggleButton.style.width= "200px";
        toggleButton.addEventListener("click", function () {
            if (toggleButton.textContent === "Ledig") {
                toggleButton.textContent = "Utilgjengelig";
                li.style.color = "red";
            } else {
                toggleButton.textContent = "Ledig";
                li.style.color = "black";
            }
        });

        li.appendChild(toggleButton);
        liste.appendChild(li);
        document.getElementById("nyttElement").value = "";
    } else {
        alert("Skriv inn noe for å legge til i listen!");
    }
});

document.getElementById("sorter").addEventListener("click", function () {
    let listeElementer = document.querySelectorAll("#liste li");

    let sortertArray = Array.from(listeElementer).sort((a, b) =>
        a.textContent.localeCompare(b.textContent)
    );

    let liste = document.getElementById("liste");
    liste.innerHTML = "";

    sortertArray.forEach(li => liste.appendChild(li));
});
