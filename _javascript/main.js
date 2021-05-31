// function resizeServiceSquareHeights() {
//     document.querySelectorAll(".service-square").forEach((el) => {
//         el.style.height = el.offsetWidth + "px";
//         el.style.lineHeight = el.offsetWidth + "px";
//     });
// }

// document.querySelectorAll(".service-square-text").forEach((el) => {
//     el.addEventListener("mouseover", (event) => {
//         event.target.style.backgroundColor = "rgba(203, 153, 126, .8)";
//     });
//     el.addEventListener("mouseout", (event) => {
//         event.target.style.backgroundColor = "";
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );
    const navItems = Array.prototype.slice.call(
        document.querySelectorAll(".is-not-tabbed-mobile"),
        0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle("is-active");
                $target.classList.toggle("is-active");

                navItems.forEach((la) => {
                    la.classList.toggle("is-tab");
                });
            });
        });
    }

    /* resizeServiceSquareHeights();

    const showCutModalButton = document
        .getElementById("showCutModal")
        .addEventListener("click", function () {
            document.getElementById("cutModal").classList.add("is-active");
        });
    const hideCutModalButton = document
        .getElementById("hideCutModal")
        .addEventListener("click", function () {
            document.getElementById("cutModal").classList.remove("is-active");
        });

    const showColorModalButton = document
        .getElementById("showColorModal")
        .addEventListener("click", function () {
            document.getElementById("colorModal").classList.add("is-active");
        });
    const hideColorModalButton = document
        .getElementById("hideColorModal")
        .addEventListener("click", function () {
            document.getElementById("colorModal").classList.remove("is-active");
        });

    const showTreatmentsModalButton = document
        .getElementById("showTreatmentsModal")
        .addEventListener("click", function () {
            document
                .getElementById("treatmentsModal")
                .classList.add("is-active");
        });
    const hideTreatmentsModalButton = document
        .getElementById("hideTreatmentsModal")
        .addEventListener("click", function () {
            document
                .getElementById("treatmentsModal")
                .classList.remove("is-active");
        });

    const showStyleModalButton = document
        .getElementById("showStyleModal")
        .addEventListener("click", function () {
            document.getElementById("styleModal").classList.add("is-active");
        });
    const hideStyleModalButton = document
        .getElementById("hideStyleModal")
        .addEventListener("click", function () {
            document.getElementById("styleModal").classList.remove("is-active");
        });

    const showPermModalButton = document
        .getElementById("showPermModal")
        .addEventListener("click", function () {
            document.getElementById("permModal").classList.add("is-active");
        });
    const hidePermModalButton = document
        .getElementById("hidePermModal")
        .addEventListener("click", function () {
            document.getElementById("permModal").classList.remove("is-active");
        });

    const showBBModalButton = document
        .getElementById("showBBModal")
        .addEventListener("click", function () {
            document.getElementById("bbModal").classList.add("is-active");
        });
    const hideBBModalButton = document
        .getElementById("hideBBModal")
        .addEventListener("click", function () {
            document.getElementById("bbModal").classList.remove("is-active");
        });

    const showWaxModalButton = document
        .getElementById("showWaxModal")
        .addEventListener("click", function () {
            document.getElementById("waxModal").classList.add("is-active");
        });
    const hideWaxModalButton = document
        .getElementById("hideWaxModal")
        .addEventListener("click", function () {
            document.getElementById("waxModal").classList.remove("is-active");
        }); */
});
