
var adElements = document.querySelectorAll('.ad');

adElements.forEach(function(adElement) {
    adElement.addEventListener('click', highlightOnClick);  
    adElement.addEventListener('click', saveFavorite);
});

// When click is found add highlighton class
function highlightOnClick(event) {
    var ad = event.target.closest('.ad');
    var adParagraph = ad.querySelector('p');
    adParagraph.classList.toggle('highlighton');
}

function saveFavorite(event) {
    var ad = event.target.closest('.ad');
    var numcaught = ad.dataset.idnum;
    var favoritesCsv = localStorage.getItem('favorites');
    var favorites = favoritesCsv.split(",");

    if (favorites.indexOf(numcaught) > -1) {
        var numIndex = favorites.indexOf(numcaught);
        favorites.splice(numIndex,1);
    } else {
        favorites.push(numcaught);
    }
    localStorage.setItem('favorites', favorites);
}

// 1. Load the favorites from localStorage
var favoritesCsv = localStorage.getItem('favorites');

// 2. Convert the string value to an array (same as in your saveFavorite function)
var favorites = favoritesCsv.split(",");

// 3. Loop through the array and toggle the highlighton class for each matching item.
favorites.forEach(function (favorite) {
    var ad = document.querySelector("[data-idnum='" + favorite + "']");
    var adParagraph = ad.querySelector('p');
    adParagraph.classList.toggle('highlighton');

}) 

// Hints: Loop through the array with the array's forEach method
// Find the correct ad using an attribute selector ([data-idnum=<number>])