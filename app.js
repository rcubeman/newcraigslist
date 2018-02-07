var adElements = document.querySelectorAll('.ad');

adElements.forEach(function(adElement) {
    adElement.addEventListener('click', highlightOnClick);  
    adElement.addEventListener('click', saveFavorite);
});

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
        favortites.push(numcaught);
    }
}