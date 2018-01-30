// var adElements = document.querySelectorAll('.ad');
// adElements.forEach(function(adElement) {
// adElement.addEventListener('click', function(event) {
  //      var ad = event.target.closest('.ad');
 //    var adParagraph = ad.querySelector('p');
//    adParagraph.style.backgroundColor = 'yellow';});  
    // });
        
    
    div.addEventListner('click', toggleClass )
         function toggleClass (el){
        if(el.className == "highlighton"){
            el.className = "highlightoff";
        } else {
            el.className = "highlighton";
        }
    }
function save() {
    var clicksave = document.getElementsByClassName('ad').value;
    localStorage.setItem('click',clicksave);
}