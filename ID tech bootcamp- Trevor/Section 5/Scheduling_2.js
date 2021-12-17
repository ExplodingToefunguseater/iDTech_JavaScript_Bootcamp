var counter = 4;
function countdown(){
    if(counter > 0 ){
        console.log(counter)
        counter --
    }
}


setInterval(countdown, 3000)