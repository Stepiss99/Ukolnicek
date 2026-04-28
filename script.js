let celkemUkolu = 0
let hotovoUkolu = 0

// najit prvky
let textCelkem = document.querySelector("#celkem-pocet")
let textHotovo = document.querySelector("#hotovo-pocet")

const vstup = document.querySelector("#task-to-add");
const tlacitko = document.querySelector(".button");
const kontejnerNaUkoly = document.querySelector(".container");
const sablona = document.querySelector(".task-template");

tlacitko.addEventListener("click", () => {

    let textUkolu = vstup.value

    if (vstup.value.trim() == "") {
        alert("Zadej nejake jmeno ukolu!")
        return
    }

    let novyUkol = sablona.cloneNode(true)
    novyUkol.classList.remove("task-template")
    novyUkol.querySelector("p").innerHTML = textUkolu

    let kos = novyUkol.querySelector(".fa-trash-alt")
    kos.addEventListener("click", () => {
        // if (ctverecek.classList.contains("done")) {
        //  hotovoUkolu--;
        //  textHotovo.innerText = hotovoUkolu
        // }
        // tady vzdy snizit pocet ukolu protoze mazeme ukol
        if (ctverecek.classList.contains("done")) {
            hotovoUkolu--;
            textHotovo.innerText = hotovoUkolu
        }
        celkemUkolu--
        textCelkem.innerText = celkemUkolu
        novyUkol.remove()
    })

    let ctverecek = novyUkol.querySelector(".not-done")

    ctverecek.addEventListener("click", () => {
        ctverecek.classList.toggle("done")
        // if (ctverecek.calssList.contains("done")) {
        //  hotovoUkolu++
        // } else {
        //  hotovoUkolu--
        // }
        // tady musite zmenit text na hotovych ukolech
        if (ctverecek.classList.contains("done")) {
            hotovoUkolu++
            } else {
            hotovoUkolu--
        }
        textHotovo.innerText = hotovoUkolu
    })

    kontejnerNaUkoly.appendChild(novyUkol)
    vstup.value = ""

    // tady zvysime pocet ukolu protoze pridavame ukol
    celkemUkolu++
    textCelkem.innerText = celkemUkolu
}); 



    












