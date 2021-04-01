"use strict";

function resizeServiceSquareHeights() {
    document.querySelectorAll(".service-square").forEach(function (el) {
        el.style.height = el.offsetWidth + "px";
        el.style.lineHeight = el.offsetWidth + "px";
    });
}

document.querySelectorAll(".service-square-text").forEach(function (el) {
    el.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "rgba(203, 153, 126, .8)";
    });
    el.addEventListener("mouseout", function (event) {
        event.target.style.backgroundColor = "";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    var navItems = Array.prototype.slice.call(document.querySelectorAll(".is-not-tabbed-mobile"), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function (el) {
            el.addEventListener("click", function () {
                // Get the target from the "data-target" attribute
                var target = el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle("is-active");
                $target.classList.toggle("is-active");

                navItems.forEach(function (la) {
                    la.classList.toggle("is-tab");
                });
            });
        });
    }

    resizeServiceSquareHeights();

    var showCutModalButton = document.getElementById("showCutModal").addEventListener("click", function () {
        document.getElementById("cutModal").classList.add("is-active");
    });
    var hideCutModalButton = document.getElementById("hideCutModal").addEventListener("click", function () {
        document.getElementById("cutModal").classList.remove("is-active");
    });

    var showColorModalButton = document.getElementById("showColorModal").addEventListener("click", function () {
        document.getElementById("colorModal").classList.add("is-active");
    });
    var hideColorModalButton = document.getElementById("hideColorModal").addEventListener("click", function () {
        document.getElementById("colorModal").classList.remove("is-active");
    });

    var showTreatmentsModalButton = document.getElementById("showTreatmentsModal").addEventListener("click", function () {
        document.getElementById("treatmentsModal").classList.add("is-active");
    });
    var hideTreatmentsModalButton = document.getElementById("hideTreatmentsModal").addEventListener("click", function () {
        document.getElementById("treatmentsModal").classList.remove("is-active");
    });

    var showStyleModalButton = document.getElementById("showStyleModal").addEventListener("click", function () {
        document.getElementById("styleModal").classList.add("is-active");
    });
    var hideStyleModalButton = document.getElementById("hideStyleModal").addEventListener("click", function () {
        document.getElementById("styleModal").classList.remove("is-active");
    });

    var showPermModalButton = document.getElementById("showPermModal").addEventListener("click", function () {
        document.getElementById("permModal").classList.add("is-active");
    });
    var hidePermModalButton = document.getElementById("hidePermModal").addEventListener("click", function () {
        document.getElementById("permModal").classList.remove("is-active");
    });

    var showBBModalButton = document.getElementById("showBBModal").addEventListener("click", function () {
        document.getElementById("bbModal").classList.add("is-active");
    });
    var hideBBModalButton = document.getElementById("hideBBModal").addEventListener("click", function () {
        document.getElementById("bbModal").classList.remove("is-active");
    });

    var showWaxModalButton = document.getElementById("showWaxModal").addEventListener("click", function () {
        document.getElementById("waxModal").classList.add("is-active");
    });
    var hideWaxModalButton = document.getElementById("hideWaxModal").addEventListener("click", function () {
        document.getElementById("waxModal").classList.remove("is-active");
    });
});