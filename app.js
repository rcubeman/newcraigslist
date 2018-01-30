
    div.addEventListener('click', toggleClass )
         function toggleClass (el){
        if(el.className == "highlighton"){
            el.className = "highlightoff";        
        } else {
            el.className = "highlighton";  
        }
    }

