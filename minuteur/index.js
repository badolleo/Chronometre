let heure = 0;
let minute = 0;
let seconde = 0
let isActive = false;
let isStopped = false;
let intSeconde;

function setSeconde(){
    seconde++;
    if(seconde == 60){
        seconde = 0;
        minute++;
    }
    
    if(minute == 60){
        minute = 0;
        heure++;
    }
    
    if(seconde > 9){
        document.getElementById('secondes').innerHTML = seconde;
    }else{
        document.getElementById('secondes').innerHTML = "0" + seconde;
    }

    if(minute > 9){
        document.getElementById('minutes').innerHTML = minute;
    }else{
        document.getElementById('minutes').innerHTML = "0" + minute;
    }

    if(heure > 9){
        document.getElementById('heures').innerHTML = heure;
    }else{
        document.getElementById('heures').innerHTML = "0" + heure;
    }
    
}

function start(){
    if(!isActive) intSeconde = setInterval(setSeconde, 1000);
    isActive = true;
}

function stop(){
    if(isActive){    
        if(!isStopped){
            clearInterval(intSeconde);
            isStopped = true;
            document.getElementById('stop').innerHTML = "REPRENDRE";
        }
        else{
            intSeconde = setInterval(setSeconde, 1000);
            isStopped = false;
            document.getElementById('stop').innerHTML = "ARRETER";
        }
    }
}

function reset(){
    isStopped = false;
    stop();
    isActive = false;
    document.getElementById('stop').innerHTML = "ARRETER";
    seconde = 0;
    heure = 0;
    minute = 0;
    document.getElementById('secondes').innerHTML = "0" + seconde;
    document.getElementById('minutes').innerHTML = "0" + minute;
    document.getElementById('heures').innerHTML = "0" + heure;
}

