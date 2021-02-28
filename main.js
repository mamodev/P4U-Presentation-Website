/*
var element = document.getElementsByClassName('animated-right'), isVisible = []
for(var i=0; i<element.length; i++) isVisible[i] = false


document.addEventListener('scroll', () => {
    var body = document.body.getBoundingClientRect()
    
    for(var i=0; i<element.length; i++){
        var rect = element[i].getBoundingClientRect()
        console.log((rect.top - body.top) == body.top)

        if(rect.top == body.top && !isVisible[i]){
            isVisible[i] = true;
            element.style.animationPlayState = "running"
        }
    }
})
*/