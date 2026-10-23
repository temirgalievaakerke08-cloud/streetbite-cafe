const menuSearch = document.getElementById("menuSearch");
const menuCards = document.querySelectorAll(".menu-card");
const searchCount = document.getElementById("searchCount");
const noResults = document.getElementById("noResults");

function filterMenu() {
    const searchText = menuSearch.value.trim().toLowerCase();
    let count = 0;

    menuCards.forEach(function (card) {
        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchText)) {
            card.hidden = false;
            count++;
        } else {
            card.hidden = true;
        }
    });

    searchCount.textContent = count + " items found";

    if (count === 0) {
        noResults.hidden = false;
    } else {
        noResults.hidden = true;
    }
}

menuSearch.addEventListener("input", filterMenu);
filterMenu();

const favoritesForm = document.getElementById("favoritesForm");
const favoriteInput = document.getElementById("favoriteInput");
const favoritesList = document.getElementById("favoritesList");
const favoritesCount = document.getElementById("favoritesCount");
const favoriteMessage = document.getElementById("favoriteMessage");

function updateFavoritesCount() {
    const count = favoritesList.children.length;
    favoritesCount.textContent = count + " items";
}

favoritesForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const burgerName = favoriteInput.value.trim();

    if (burgerName === "") {
        favoriteMessage.textContent = "Please enter a burger name.";
        return;
    }

    favoriteMessage.textContent = "";

    const newItem = document.createElement("li");
    newItem.textContent = burgerName;

    const removeButton = document.createElement("button");
    removeButton.textContent = "REMOVE";
    removeButton.type = "button";
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", function () {
        newItem.remove();
        updateFavoritesCount();
    });

    newItem.appendChild(removeButton);
    favoritesList.appendChild(newItem);

    favoriteInput.value = "";
    updateFavoritesCount();
});
