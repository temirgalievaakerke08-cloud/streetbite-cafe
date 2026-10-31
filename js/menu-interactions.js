$(document).ready(function () {


    let selectedCategory = "all";

    function filterMenu() {

        const searchText = $("#menuSearch").val().trim().toLowerCase();

        let count = 0;

        $(".menu-card").each(function () {

            const card = $(this);
            const cardText = card.text().toLowerCase();
            const cardCategory = card.data("category");

            const matchesSearch = cardText.includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                cardCategory === selectedCategory;

            if (matchesSearch && matchesCategory) {
                card.removeAttr("hidden");
                count++;
            } else {
                card.attr("hidden", true);
            }

        });

        $("#searchCount").text(count + " items found");

        if (count === 0) {
            $("#noResults").removeAttr("hidden");
        } else {
            $("#noResults").attr("hidden", true);
        }

    }

    $("#menuSearch").on("input", function () {
        filterMenu();
    });

    $(".filter-button").on("click", function () {

        selectedCategory = $(this).data("category");

        $(".filter-button")
            .removeClass("active")
            .attr("aria-pressed", "false");

        $(this)
            .addClass("active")
            .attr("aria-pressed", "true");

        filterMenu();

    });

    filterMenu();

});

// TASK 4: Dynamic Favorites List

$(document).ready(function () {

    function updateFavoritesCount() {
        const count = $("#favoritesList li").length;

        $("#favoritesCount").text(count + " items");

        if (count === 0) {
            $("#favoritesEmpty").show();
        } else {
            $("#favoritesEmpty").hide();
        }
    }

    // Add a new favorite
    $("#favoritesForm").on("submit", function (event) {
        event.preventDefault();

        const burgerName = $("#favoriteInput").val().trim();

        if (burgerName === "") {
            $("#favoriteMessage").text("Please enter a burger name.");
            return;
        }

        $("#favoriteMessage").text("");

        const newItem = $("<li></li>");
        newItem.text(burgerName);

        const removeButton = $("<button></button>")
            .text("REMOVE")
            .attr("type", "button")
            .addClass("remove-button");

        newItem.append(removeButton);
        $("#favoritesList").append(newItem);

        $("#favoriteInput").val("");

        updateFavoritesCount();
    });

    // Remove an item using delegated event
    $("#favoritesList").on("click", ".remove-button", function () {
        $(this).parent().remove();

        updateFavoritesCount();
    });

    updateFavoritesCount();

});