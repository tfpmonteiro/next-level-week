function populateUfs() {
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            states.forEach(element => {
                ufSelect.innerHTML += `$<option value="${element.id}">${element.nome}</option>`;
            });
        })
}

populateUfs();

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`;

    citySelect.innerHTML = '$<option value="">$Selecione a cidade</option>';
    citySelect.disabled = true;

    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(cities => {
            cities.forEach(element => {
                citySelect.innerHTML += `$<option value="{element.id}">${element.nome}</option>`;
            });

            citySelect.disabled = false;
        })
}

document.querySelector("select[name=uf]")
    .addEventListener("change", getCities);


// itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (let item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items");
let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target;
    itemLi.classList.toggle("selected");

    const itemId = itemLi.dataset.id;
    
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId
        return itemFound;
    });

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter(item => {
            const itemsDiifferent = item != itemId;
            return itemsDiifferent
        });

        selectedItems = filteredItems;
    } else {
        selectedItems.push(itemId);
    }

    collectedItems.value = selectedItems;
}