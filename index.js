let indx = null;
let store = [];

function showTable() {
    document.querySelector(".storeValue").classList.remove("hidden");
}

function adauga(value, event) {
    event.preventDefault();
    let pers = {};
    pers.nume = document.querySelector("[name='name']").value.trim();
    pers.telefon = document.querySelector("[name='phone']").value.trim();

    if (indx !== null) {
        store[indx] = pers;
        indx = null;
    } else {
        store.push(pers);
  }
    draw();
    showTable();
    document.querySelector("form").reset();
}

function draw() {
    let tabel = document.querySelector("#list tbody");
    let str = "";
    for (i = 0; i < store.length; i++) {
        str += `<tr>
        <td class = "nameRow">${store[i].nume}</td>
        <td class = "phoneRow">${store[i].telefon}</td>
        <td><input class="editeaza" type="button" onclick="editeaza(${i});" value="Editeaza"></td>
        <td><input class="sterge" type="button" onclick="sterge(${i});" value="Sterge"></td>
        </tr>`;
    }
    tabel.innerHTML = str;
}

function sterge(idx) {
    if (confirm(`Contactul ${store[idx].nume} va fi sters permanent. Esti sigur ca vrei sa faci asta?`)){ 
        store.splice(idx, 1);
        draw();
  }
}

function editeaza(idx) {
    showTable();

    let pers = store[idx];
    document.querySelector("[name='phone']").value = pers.telefon;
    document.querySelector("[name='name']").value = pers.nume;

    indx = idx;
}
