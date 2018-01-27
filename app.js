var adElements = document.querySelectorAll('.ad');
adElements.forEach(function(adElement) {
    adElement.addEventListener('click', function(event) {
        var ad = event.target.closest('.ad');
        var adParagraph = ad.querySelector('p');
        adParagraph.style.backgroundColor = 'yellow';});  
    });
        
